import type {Metadata} from "next";
import "./globals.css";
import {ToastProvider} from "@/components/ui/toast";

export const metadata: Metadata = {
    title: "My App",
    description: "with vercel v0 ai",
};

export default function RootLayout(
    {children}
    : Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <ToastProvider>{children}</ToastProvider>
        </body>
        </html>
    );
}
