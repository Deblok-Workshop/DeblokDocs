import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: {
    template: "%s | Deblok",
    default: "Deblok",
  },
  description:
    "Deblok is a platform for disposable workspaces on-the-fly.",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
