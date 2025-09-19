import "@/styles/globals.css";

import { type Metadata } from "next";
import { type ReactNode } from "react";
import { Geist, Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/sonner";

import { SessionProvider } from "@/components/providers/SessionProvider";
import { getPreference } from "@/server/actions";
import { THEME_MODE_VALUES, ThemeMode } from "@/types/preferences/theme";
import { THEME_PRESET_VALUES, ThemePreset } from "@/types/preferences/theme";
import { PreferencesStoreProvider } from "@/stores/preferences/preferences-provider";

export const metadata: Metadata = {
  title: "MedLaby - Lab Management System",
  description: "Comprehensive laboratory management system with secure authentication",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeMode = await getPreference<ThemeMode>("theme_mode", THEME_MODE_VALUES, "light");
  const themePreset = await getPreference<ThemePreset>("theme_preset", THEME_PRESET_VALUES, "default");

  return (
    <html lang="en"
      className={`${themeMode === "dark" ? "dark" : ""} ${geist.variable}`}
      data-theme-preset={themePreset}
      suppressHydrationWarning >
      <body className={`${inter.className} min-h-screen antialiased`}>
        <PreferencesStoreProvider themeMode={themeMode} themePreset={themePreset}>
          <SessionProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
            <Toaster />
          </SessionProvider>
        </PreferencesStoreProvider>
      </body>
    </html >
  );
}
