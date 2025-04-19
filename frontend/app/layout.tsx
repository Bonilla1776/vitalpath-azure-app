import './globals.css'; // Keep this for resets or custom styles
import { Providers } from './providers';

export const metadata = {
  title: 'VitalPath',
  description: 'AI Health Coaching App',
  metadataBase: new URL('https://app.vitalpathinnovations.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://app.vitalpathinnovations.com/" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


