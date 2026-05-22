import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lanxgrow — AI English Speaking Coach',
  description:
    'Improve your spoken English fluency, confidence, and clarity with Lanxgrow — your AI-powered personal English tutor.',
  keywords: ['English speaking', 'AI tutor', 'fluency', 'English coach', 'India'],
  authors: [{ name: 'Lanxgrow' }],
  openGraph: {
    title: 'Lanxgrow — AI English Speaking Coach',
    description: 'Practice English conversations with AI. Built for Indian learners.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
