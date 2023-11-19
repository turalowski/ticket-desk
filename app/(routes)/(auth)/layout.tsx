import { AuthNav } from '@/app/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNav />
      {children}
    </>
  );
}
