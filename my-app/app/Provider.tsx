"use client";

import { ReactNode } from "react";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface Props {
    children?: ReactNode
    // any props that come into the component
  }

export default function ReactQueryProvider({ children }:Props) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
