import type { PropsWithChildren } from "react";
import { MantineProvider as MantineProviderOriginal } from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';

import { theme } from "@/shared/config/mantine-theme";

export const MantineProvider = ({ children }: PropsWithChildren) => {
  return <MantineProviderOriginal theme={theme}>
    {children}
    <ModalsProvider/>
  </MantineProviderOriginal>;
};
