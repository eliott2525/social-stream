'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/contexts/theme-provider';
import { inter } from '@/lib/fonts';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <p className="text-muted-foreground">
              {error.message || 'An unexpected error occurred'}
            </p>
            <Button
              variant="default"
              onClick={() => reset()}
            >
              Try again
            </Button>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 