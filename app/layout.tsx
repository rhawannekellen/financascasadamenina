import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Casa de Dama da Noite | Gestão de mensalidades', description: 'Gestão das contribuições da Casa de Dama da Noite.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
