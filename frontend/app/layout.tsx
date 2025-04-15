import './globals.css'; // Keep this for resets or custom styles
import { Providers } from './providers';

export const metadata = {
  title: 'VitalPath',
  description: 'AI Health Coaching App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
