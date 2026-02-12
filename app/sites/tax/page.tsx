
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LegacyTaxRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tax');
  }, [router]);

  return null;
}
