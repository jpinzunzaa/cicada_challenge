import type { Metadata } from 'next';
import Main from '@repo/ui/wrappers/main';
import '../src/styles/main.scss';

export const metadata: Metadata = {
  title: 'Cicada',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
