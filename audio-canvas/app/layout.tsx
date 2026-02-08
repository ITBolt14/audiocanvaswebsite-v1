import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Audio Canvas | Where Vision Meets Vibration",
    description: "Audio Canvas provides professional audio, lighting, and AV solutions for weddings, corporate events, live performances, and private functions across South Africa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-[#07090b] text-slate-100 antialiased">
                {children}
            </body>
        </html>
    );
}