import localFont from "next/font/local";

export const GmarketSansOFT = localFont({
  src: [
    {
      path: "./GmarketSansLight.otf",
      weight: "300",
    },
    {
      path: "./GmarketSansMedium.otf",
      weight: "500",
    },
    {
      path: "./GmarketSansBold.otf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-gmarket-sans",
});
