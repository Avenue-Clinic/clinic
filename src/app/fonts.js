import { Rubik, Poppins } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'], // Adding common weights
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'], // Adding required weights
});