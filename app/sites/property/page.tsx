
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LegacyPropertyRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/property');
  }, [router]);

  return null;
}
