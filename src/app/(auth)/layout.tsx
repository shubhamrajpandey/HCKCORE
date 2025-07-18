import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "HCKCORE",
  description: "Student registration for HeraldHub platform",
  icons: {
    icon: "/hck core logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
      >
        {children}
    </main>
  );
}
