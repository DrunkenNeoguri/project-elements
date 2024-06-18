import { GmarketSansOFT } from "../fonts/fonts";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${GmarketSansOFT.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <title>준비물 챙겼어?</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body
        style={{
          backgroundColor: "#222222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 0,
        }}
      >
        <main
          style={{
            backgroundColor: "#ffffff",
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            maxWidth: "379px",
            boxSizing: "border-box",
            overflow: "scroll",
          }}
          id="root"
          className="font-gmarketSans"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
