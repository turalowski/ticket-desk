'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { AuthForm } from '../AuthForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  // STATES
  const router = useRouter();
  const [error, setError] = useState<string>();

  /**
   * Handles the form submission for user sign-up.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's chosen password.
   */
  async function handleSubmit(email: string, password: string) {
    // Create a Supabase client instance
    const supabase = createClientComponentClient();
    // Attempt to sign up the user using Supabase authentication
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Specify the email redirection URL after successful sign-up
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    // Check for errors during the sign-up process
    if (error) {
      // If an error occurs, set the error message
      setError(error.message);
    } else {
      // If sign-up is successful, navigate to the verification page
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
