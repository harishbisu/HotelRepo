// src/app/layout.js
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import customTheme from "@/theme/page";
import { AuthProvider } from "@/context/AuthContext";

const queryClient = new QueryClient();

export default function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider theme={customTheme}>
                        <AuthProvider>
                          {children}
                        </AuthProvider>
                    </ChakraProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
