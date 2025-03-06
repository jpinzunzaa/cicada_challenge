import type { Metadata } from 'next';
import Main from '@repo/ui/wrappers/main';
import '../src/styles/main.scss';

export const metadata: Metadata = {
  title: 'Cicada',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
