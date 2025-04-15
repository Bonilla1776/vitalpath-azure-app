'use client';

import { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; // ✅ FIXED

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

