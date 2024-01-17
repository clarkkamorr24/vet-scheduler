/** @format */

import { Urbanist } from 'next/font/google'
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { FormProvider } from "@/components/form-context";
import { Metadata } from 'next'


const urbanist = Urbanist({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vet Scheduler',
  description: 'Scheduling App',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favico.ico" sizes="any" />
      </head>
      <body className={urbanist.className} suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <FormProvider>
                <Header />
                <main>
                  <div className="mx-auto">
                    {children}
                  </div>
                </main>
              </FormProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
