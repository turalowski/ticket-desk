'use client';

import { Button } from '@/app/components/ui/button';
import { DeleteIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    const response = await fetch(`/api/tickets/${id}`, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (json.error) {
      console.log(error);
      setIsLoading(false);
    }

    if (!json.error) {
      router.refresh();
      router.push('/');
    }
  }
  return (
    <Button variant="destructive" onClick={handleClick} disabled={isLoading}>
      {isLoading && (
        <>
          <DeleteIcon />
          Deleting...
        </>
      )}
      {!isLoading && <>Delete</>}
    </Button>
  );
}
