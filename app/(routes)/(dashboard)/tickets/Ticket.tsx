import { CircleIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import Link from 'next/link';
import { Ticket } from '@/app/utils/types';

export function Ticket({ ticket }: { ticket: Ticket }) {
  return (
    <Card>
      <Link href={`/tickets/${ticket.id}`}>
        <CardHeader className="flex flex-row justify-between items-center gap-2">
          <CardTitle>{ticket.title}</CardTitle>
          <Badge variant="outline" className="mt-0">
            {ticket.priority}
          </Badge>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-3">
            {ticket.body.split('.')[0]}
          </CardDescription>
          <div className="flex items-center text-sm text-muted-foreground">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {ticket.user_email}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
