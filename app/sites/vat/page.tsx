
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LegacyVatRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/vat');
  }, [router]);

  return null;
}
