import { ThemeProvider } from "@/components/ui/themeprovider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import {UserProvider} from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SprintTrekker",
  description:
    "Project Management tool Where every sprint takes you closer to success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} patterned-background`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <UserProvider>
            <main className="min-h-screen">{children}</main>
          </UserProvider>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>© Created by RD - 2024.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
