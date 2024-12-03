'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React, { useMemo } from 'react';

export default function Providers({ children }: React.PropsWithChildren) {
  const client = useMemo(() => new QueryClient(), []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
