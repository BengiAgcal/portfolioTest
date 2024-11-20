// app/layout.js
import './globals.css'; // Your global styles
import { Inter, Playfair_Display } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ['latin'],   // Add other subsets if needed
  weight: ['300','400', '500', '700'], // Specify weights
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], 
  weight: ['400', '700', '900'], // Specify weights
  style: ['normal', 'italic']
});

export const metadata = {
  title: 'Bengi Agcal',
  description: 'Developer, Designer, Artist',
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ 
      '--font-inter': inter.style.fontFamily, 
      '--font-playfair-display': playfairDisplay.style.fontFamily 
    }}>
      <body className={playfairDisplay.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
