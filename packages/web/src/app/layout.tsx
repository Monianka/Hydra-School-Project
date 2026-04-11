import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydra-scubadiving.com"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png?v=2"],
  },
  title: {
    default: "Hydra-Scuba Diving School | London & Kent | Polish Diving School",
    template: "%s | Hydra-Scuba Diving School",
  },
  description:
    "Polska szkoła nurkowania w Anglii. PADI-certified scuba diving courses in London, Kent and England. Kursy nurkowania po polsku i angielsku.",
  keywords: [
    "polska szkoła nurkowania",
    "szkoła nurkowania w Anglii",
    "szkoła nurkowania w Londynie",
    "szkoła nurkowania w Kent",
    "kursy nurkowania PADI",
    "nurkowanie Londyn",
    "nurkowanie Kent",
    "polski instruktor nurkowania",
    "diving school London",
    "scuba diving courses UK",
    "PADI diving England",
  ],
  openGraph: {
    title:
      "Polska szkoła nurkowania | Hydra-Scuba Diving School | Londyn, Kent, Anglia",
    description:
      "Hydra-Scuba Diving School - profesjonalna polska szkoła nurkowania PADI w Anglii. Kursy nurkowania w Londynie, Kent i całej Anglii.",
    url: "https://hydra-scubadiving.com",
    siteName: "Hydra-Scuba Diving School",
    images: [
      {
        url: "/logo192.png",
        width: 192,
        height: 192,
        alt: "Hydra-Scuba Diving School logo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydra-Scuba Diving School | London & Kent",
    description:
      "PADI-certified scuba diving courses in London, Kent and England. Polish diving school.",
    images: ["/logo192.png"],
  },
  alternates: {
    canonical: "https://hydra-scubadiving.com",
    languages: {
      en: "https://hydra-scubadiving.com",
      pl: "https://hydra-scubadiving.com/pl",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Hydra-Scuba Diving School",
  description:
    "Polska szkoła nurkowania oferująca kursy PADI w Anglii, Londynie i Kent. Kursy nurkowania po polsku i angielsku.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Alkerden Ln",
    addressLocality: "Swanscombe",
    addressRegion: "Kent",
    postalCode: "DA10 0EQ",
    addressCountry: "GB",
  },
  telephone: "+447414724401",
  url: "https://hydra-scubadiving.com/",
  image: "https://hydra-scubadiving.com/logo192.png",
  areaServed: ["London", "Kent", "England", "UK"],
  sameAs: [
    "https://www.facebook.com/HydraScubaDiving",
    "https://www.instagram.com/hydra.divers/",
    "https://www.youtube.com/@divinglens",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

