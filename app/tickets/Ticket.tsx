import { CircleIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Ticket } from '../utils/types';

export function Ticket({ ticket }: { ticket: Ticket }) {
  return (
    <Card>
      <Link href={`/tickets/${ticket.id}`}>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="mb-4">{ticket.title}</CardTitle>
            <CardDescription>{ticket.body.split('.')[0]}</CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <Badge variant="outline">{ticket.priority}</Badge>
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
      </Link>
    </Card>
  );
}
