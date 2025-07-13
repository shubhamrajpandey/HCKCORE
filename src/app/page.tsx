import Image from "next/image";
import { Header } from "./components/header/page";
import { Signin } from "./signin/page";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <Signin />
    </div>
  );
}
