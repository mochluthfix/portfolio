// app/fonts.ts
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-quicksand', 
  display: 'swap',
});

export default quicksand;