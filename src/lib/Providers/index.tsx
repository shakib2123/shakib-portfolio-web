"use client";

import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { SoundProvider } from "@/context/sound.context";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <QueryClientProvider client={queryClient}>
      <SoundProvider>
        <NextUIProvider>
          <NextThemesProvider defaultTheme="dark">
            <Toaster />
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </SoundProvider>
    </QueryClientProvider>
  );
}
export default Providers;
