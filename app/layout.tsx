import "./css/style.css";

import localFont from "next/font/local";

import Header from "@/components/ui/header";
import GoogleTagManager from "@/components/google-tag-manager/google-tag-manager";
// import ScrollToTop from "@/components/scrollToTop/ScrollToTop";


const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
});


const mendaFont = localFont({
  src: [
    {
      path: "../public/fonts/Menda Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Menda Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Menda Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Menda Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Menda Black.ttf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-menda",
  display: "swap",
})

const ralewayFont = localFont({
  src: [
    {
      path: "../public/fonts/Raleway-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Raleway-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    }
  ],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata = {
  title: "Lumunate",
  description: "We specialize in web and mobile development, systems integration and digital marketing to help businesses thrive in today’s fast-paced digital world.",
  keywords: ["Lumunate", "Portfolio", "Next.js", "React", "Web Development"],
  authors: [
    {
      name: "Faizan Haq",
      url: "https://fizoneechan.com"
    },
    {
      name: "Lumunate",
      url: "https://lumunate.com"
    },
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
        <GoogleTagManager />
        <link rel="icon" href="/SYMBOL-08.png" />
      </head>
      <body
        className={`${nacelle.variable} ${mendaFont.variable} ${ralewayFont.variable} bg-black font-raleway text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          {/* <ScrollToTop /> */}
        </div>
      </body>
    </html>
  );
}
