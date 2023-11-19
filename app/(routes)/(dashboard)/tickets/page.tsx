import { Button } from '@/app/components/ui/button';
import TicketList from './TicketList';
import Link from 'next/link';

export default function Tickets() {
  return (
    <main className="p-6">
      <div className="flex items-center pb-2 border-b justify-between">
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight ">
          Tickets
        </h2>
        <Link href="/create">
          <Button>Add a ticket</Button>
        </Link>
      </div>
      <TicketList />
    </main>
  );
}
