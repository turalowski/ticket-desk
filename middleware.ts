import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

async function renewAuthToken(req: NextRequest): NextResponse {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}

export async function middleware(req: NextRequest) {
  const res = await renewAuthToken(req);
  return res;
}
