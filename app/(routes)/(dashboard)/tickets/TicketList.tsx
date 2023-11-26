import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Ticket } from './Ticket';
import { cookies } from 'next/headers';
import { Database } from '@/lib/database.types';
import { Ticket as TicketType } from '@/app/utils/types';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { RocketIcon } from '@radix-ui/react-icons';

const TICKETS_TABLE_NAME = process.env.NEXT_PUBLIC_TICKETS_TABLE || 'tickets';

async function getTickets(): Promise<TicketType[] | undefined> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase.from(TICKETS_TABLE_NAME).select();

  if (error) {
    console.log(error?.message);
  } else {
    return data;
  }
}

export default async function TicketList() {
  // fetch data
  const tickets = await getTickets();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets &&
        tickets.map(ticket => (
          <div key={ticket.id} className="my-5">
            <Ticket ticket={ticket} />
          </div>
        ))}
      {!tickets && (
        <Alert className="my-6">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            There is not any ticket. Click on Add a ticket button to create a
            new one.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
