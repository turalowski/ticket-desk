import { CircleIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Ticket } from '@/app/utils/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/lib/database.types';
import { notFound } from 'next/navigation';
import DeleteButton from './delete-button';

enum PriorityColor {
  low = 'green',
  medium = 'blue',
  high = 'red',
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: ticket } = await supabase
    .from('tickets')
    .select()
    .eq('id', id)
    .single();

  return {
    title: `Helpdesk | ${ticket?.title || 'Ticket not found'} `,
  };
}

async function getTicket(id: string): Promise<Ticket> {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from('tickets')
    .select()
    .eq('id', id)
    .single();

  if (!data) {
    notFound();
  }
  return data;
}

export default async function TicketDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const ticket: Ticket = await getTicket(id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main className="p-6 ">
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="mb-4">{ticket.title}</CardTitle>
            <CardDescription>{ticket.body?.split('.')[0]}</CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <Badge
              variant="outline"
              className={`text-${PriorityColor[ticket.priority || 'low']}-900`}
            >
              {ticket.priority}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              {ticket.user_email}
            </div>
            {data.session.user.email === ticket.user_email && (
              <DeleteButton id={id} />
            )}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
