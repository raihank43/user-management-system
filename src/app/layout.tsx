"use client";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import DataFetcher from "@/providers/DataFetcherProviders";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/NavbarComponents";
import UserListFetcher from "@/providers/UserListFetcherProviders";
import SearchUserListFetcher from "@/providers/SearchListUserProviders";
import SortOrderUserListFetcher from "@/providers/SortOrderUserListFetcherProviders";
import CurrentLogUserFetcher from "@/providers/CurrentLogUserFetcherProviders";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <QueryClientProvider client={queryClient}>
          <DataFetcher />
          <UserListFetcher />
          <SearchUserListFetcher />
          <SortOrderUserListFetcher />
          <CurrentLogUserFetcher />
          <Navbar />
          {children}
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
