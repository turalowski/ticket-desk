import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 p-6">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Dashboard
      </h2>
      <p className="leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex items-center justify-center my-3">
        <Link href="/tickets">
          <Button>View Tickets</Button>
        </Link>
      </div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Company Updates
      </h2>
      <p className="leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="leading-7">
        Risus ultricies tristique nulla aliquet enim tortor. At lectus urna duis
        convallis convallis tellus id interdum velit. Sed risus ultricies
        tristique nulla aliquet enim tortor at auctor. Mattis molestie a iaculis
        at. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Turpis egestas
        maecenas pharetra convallis posuere. Platea dictumst quisque sagittis
        purus sit amet volutpat. Sed tempus urna et pharetra. Sagittis aliquam
        malesuada bibendum arcu vitae. Dignissim enim sit amet venenatis urna.
        Velit dignissim sodales ut eu. Id aliquet risus feugiat in ante metus
        dictum. Adipiscing enim eu turpis egestas. Nec feugiat nisl pretium
        fusce id velit ut tortor. At varius vel pharetra vel turpis nunc eget
        lorem dolor. Nunc lobortis mattis aliquam faucibus purus.
      </p>
    </main>
  );
}
