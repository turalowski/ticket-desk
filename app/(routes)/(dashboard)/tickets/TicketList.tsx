import { Ticket } from './Ticket';
import { Ticket as TicketType } from '@/app/utils/types';

async function getTickets(): Promise<TicketType[]> {
  const response = await fetch('http://localhost:5000/tickets', {
    next: {
      revalidate: 30,
    },
  });
  const tickets = response.json();
  return tickets;
}

export default async function TicketList() {
  // fetch data
  const tickets: TicketType[] = await getTickets();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.map(ticket => (
        <div key={ticket.id} className="my-5">
          <Ticket ticket={ticket} />
        </div>
      ))}
    </div>
  );
}
