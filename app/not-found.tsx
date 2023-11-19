import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-6">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Page not found
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We could not find the page that you are looking for.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Go back to the{' '}
        <Link href="/" className="text-blue-600">
          Dashboard
        </Link>
      </p>
    </main>
  );
}
