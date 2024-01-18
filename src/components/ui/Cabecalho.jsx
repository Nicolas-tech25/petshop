import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Image
          src="/images/logo.png"
          width={48}
          height={48}
          alt="Patinha dentro de um coração"
        />

        <Link href="/">PetShop</Link>
      </h1>
      <Menu />
    </header>
  );
}
