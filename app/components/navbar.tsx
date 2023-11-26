'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Session, User } from '@supabase/supabase-js';
import LogoutButton from './logout-button';
import { usePathname } from 'next/navigation';

export function MainNav({
  user,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  user: User;
}) {
  const pathname = usePathname();
  return (
    <nav className={cn('flex items-center gap-6 p-6', className)} {...props}>
      <Link
        href="/"
        className={`text-sm font-medium transition-colors hover:text-primary  ${
          pathname === '/' ? null : 'text-muted-foreground'
        }`}
      >
        Dashboard
      </Link>
      <Link
        href="/tickets"
        className={`text-sm font-medium transition-colors hover:text-primary mr-auto ${
          pathname === '/tickets' ? null : 'text-muted-foreground'
        }`}
      >
        Tickets
      </Link>
      {user && <span className="hidden md:block">{user.email}</span>}
      <LogoutButton />
    </nav>
  );
}

export function AuthNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6 p-6', className)}
      {...props}
    >
      <Link
        href="/login"
        className={`text-sm font-medium transition-colors hover:text-primary  ${
          pathname === '/login' ? null : 'text-muted-foreground'
        }`}
      >
        Login
      </Link>
      <Link
        href="/register"
        className={`text-sm font-medium transition-colors hover:text-primary  ${
          pathname === '/register' ? null : 'text-muted-foreground'
        }`}
      >
        Register
      </Link>
    </nav>
  );
}
