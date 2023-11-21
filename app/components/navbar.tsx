import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Session, User } from '@supabase/supabase-js';
import LogoutButton from './logout-button';

export function MainNav({
  user,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  user: User;
}) {
  return (
    <nav className={cn('flex items-center gap-6 p-6', className)} {...props}>
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/tickets"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary mr-auto"
      >
        Tickets
      </Link>
      {user && <span>{user.email}</span>}
      <LogoutButton />
    </nav>
  );
}

export function AuthNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6 p-6', className)}
      {...props}
    >
      <Link
        href="/login"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Register
      </Link>
    </nav>
  );
}
