import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSide from "@/components/Layouts/AppSide";
import { Providers } from "@/provider/TanStack";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <Providers>
            <AppSide />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </Providers>
        </SidebarProvider>
      </body>
    </html>
  );
}
