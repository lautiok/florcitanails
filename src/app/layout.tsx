import type { Metadata } from "next";
import { Poppins, Alice } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Florcita Nails - Servicios de manicura y academia en Buenos Aires",
  description:
    "Florcita Nails no es solo un salón de belleza, ¡es un estudio de uñas y una academia!",
};

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-alice",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Florcita Nails no es solo un salón de belleza, ¡es un estudio de uñas y una academia!"
        />
        <meta
          property="og:title"
          content="Florcita Nails - Servicios de manicura y academia en Buenos Aires"
        />
        <meta
          property="og:description"
          content="Florcita Nails no es solo un salón de belleza, ¡es un estudio de uñas y una academia!"
        />
        <meta
          property="og:image"
          content="https://www.florcitanails.com.ar/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta name="og:url" content="https://www.florcitanails.com.ar/" />
        <link rel="canonical" href="https://florcitanails.com.ar/" />
      </head>
      <body className={`${poppins.variable} ${alice.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
