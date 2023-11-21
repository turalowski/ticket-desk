import { RocketIcon } from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';

export default function Verify() {
  return (
    <nav className="h-full flex grow items-center flex-col justify-center">
      <div>
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Almost done!</AlertTitle>
          <AlertDescription>
            Before logging in, you need to verify your email address.
          </AlertDescription>
        </Alert>
      </div>
    </nav>
  );
}
