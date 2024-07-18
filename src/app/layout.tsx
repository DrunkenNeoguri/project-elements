import { Suspense } from "react";
import { GmarketSansOFT } from "../fonts/fonts";
import "./global.css";
import ExternalProvider from "../providers/external-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${GmarketSansOFT.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <title>준비물 챙겼어?</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body className="bg-[#222222] flex flex-col items-center m-0">
        <main
          className="w-full relative bg-white overflow-scroll box-border max-w-[379px] min-h-[100vh] font-gmarketSans"
          id="root"
        >
          <Suspense>
            <ExternalProvider>{children}</ExternalProvider>
          </Suspense>
        </main>
      </body>
    </html>
  );
}
