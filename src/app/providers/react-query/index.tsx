import type { PropsWithChildren } from "react";
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from "@/shared/config/query-client";

export const ReactQuery = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} position="top" /> */}
    </QueryClientProvider>
  )
}
