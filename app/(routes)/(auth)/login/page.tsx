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

  /**
   * Handles the form submission for user sign-in.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   */
  async function handleSubmit(email: string, password: string) {
    // Clear any previous error messages
    setError(null);
    // Create a Supabase client instance
    const supabase = createClientComponentClient();
    // Attempt to sign in the user using Supabase authentication
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    // Check for errors during the sign-in process
    if (error) {
      // If an error occurs, set the error message
      setError(error.message);
    } else {
      // If sign-in is successful, navigate to the home page
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
