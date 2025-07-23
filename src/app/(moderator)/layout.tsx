import type { Metadata } from "next";
import ModeratorSlideBar from "../components/moderatorSlidebar/moderatorSlidebar";

export const metadata: Metadata = {
  title: "HCKCORE | Moderator",
  description: "Moderator section for HeraldHub platform",
  icons: {
    icon: "/hck core logo.svg",
  },
};

export default function ModeratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <ModeratorSlideBar />
        <main className="min-h-screen px-4">{children}</main>
      </div>
    </>
  );
}
