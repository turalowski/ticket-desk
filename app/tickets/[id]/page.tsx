import { CircleIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

enum PriorityColor {
  low = 'green',
  medium = 'blue',
  high = 'red',
}

async function getTicket(id: string): Promise<Ticket> {
  const response = await fetch('http://localhost:5000/tickets/' + id, {
    next: {
      revalidate: 30,
    },
  });
  const ticket = response.json();
  return ticket;
}

export default async function TicketDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const ticket: Ticket = await getTicket(id);

  return (
    <main className="p-6 ">
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="mb-4">{ticket.title}</CardTitle>
            <CardDescription>{ticket.body.split('.')[0]}</CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <Badge
              variant="outline"
              className={`text-${PriorityColor[ticket.priority]}-900`}
            >
              {ticket.priority}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              {ticket.user_email}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
