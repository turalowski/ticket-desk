'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AuthForm } from '../AuthForm';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<string>();

  async function handleSubmit(email: string, password: string) {
    setError(null);
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      router.push('/');
    }
  }

  return (
    <nav className="h-full flex grow items-center flex-col justify-center">
      <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight ">
        Login
      </h2>

      <div className="w-full flex flex-col gap-6 md:w-1/2">
        <AuthForm handleSubmit={handleSubmit} submitButtonLabel="Login" />
        {error && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
    </nav>
  );
}
