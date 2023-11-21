import { AuthNav } from '@/app/components/navbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/');
  }

  return (
    <main className="flex flex-col min-h-screen">
      <AuthNav />
      {children}
    </main>
  );
}
