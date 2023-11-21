// Route: /api/tickets

import { Ticket } from '@/app/utils/types';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const response = await fetch(`http://localhost:5000/tickets/${id}`);
  const tickets: Ticket[] = await response.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}
