import { Ticket } from './Ticket';

type Ticket = {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
};
async function getTickets(): Promise<Ticket[]> {
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
  const tickets: Ticket[] = await getTickets();

  return (
    <div className="flex gap-3">
      {tickets.map(ticket => (
        <div key={ticket.id} className="my-5">
          <Ticket ticket={ticket} />
        </div>
      ))}
    </div>
  );
}
