// Route: /api/tickets

import { Ticket } from '@/app/utils/types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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

export async function DELETE(_, { params }) {
  const id = params.id;
  console.log('id', id);
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.from('tickets').delete().eq('id', id);

  return NextResponse.json({ error });
}
