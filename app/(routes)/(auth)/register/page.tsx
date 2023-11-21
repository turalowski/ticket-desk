'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { AuthForm } from '../AuthForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string>();
  async function handleSubmit(email: string, password: string) {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/verify');
    }
  }

  return (
    <nav className="h-full flex grow items-center flex-col justify-center">
      <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight ">
        Register
      </h2>
      <div className="w-full flex flex-col gap-6 md:w-1/2">
        <AuthForm handleSubmit={handleSubmit} submitButtonLabel="Register" />
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
