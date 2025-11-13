import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Bookshelf",
  description:
    "A simple app to keep track of your personal book collection and add new titles easily.",
  icons: ["/favicon.ico?v=4"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
