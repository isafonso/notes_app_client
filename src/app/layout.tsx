import { ReactNode } from "react";
import "../globals.css";

interface IRootProps {
  children: ReactNode;
}

export const metadata = {
  title: "Notes App",
  description: "Seus a fazer aqui",
};

export default function RootLayout({ children }: IRootProps) {
  return (
    <html lang="pt-pt">
      <body>{children}</body>
    </html>
  );
}
