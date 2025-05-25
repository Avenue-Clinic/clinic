export const defaultMetadata = {
  metadataBase: 'https://avenue-clinic.com', // Replace with your actual domain
  title: {
    default: 'Avenue Dental Clinic',
    template: '%s | Avenue Dental Clinic'
  },
  description: 'Premier dental care in Istanbul offering implants, cosmetic dentistry, and advanced dental treatments with international standards.',
  keywords: ['dental clinic istanbul', 'dental implants', 'cosmetic dentistry', 'dental treatment turkey', 'dental tourism'],
  authors: [{ name: 'Avenue Dental Clinic' }],
  creator: 'Avenue Dental Clinic',
  publisher: 'Avenue Dental Clinic',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR', 'ar_SA'],
    siteName: 'Avenue Dental Clinic',
    images: [
      {
        url: '/images/og-image.jpg', // Make sure to add this image
        width: 1200,
        height: 630,
        alt: 'Avenue Dental Clinic Istanbul'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avenue Dental Clinic',
    description: 'Premier dental care in Istanbul offering implants, cosmetic dentistry, and advanced dental treatments.',
    images: ['/images/twitter-image.jpg'], // Make sure to add this image
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'format-detection': 'telephone=no',
  }
};
