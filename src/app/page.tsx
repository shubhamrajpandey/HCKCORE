import Image from "next/image";
import { Header } from "./components/header/page";
import Login from "./login/page";

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}
