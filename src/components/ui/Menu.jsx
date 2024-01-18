import Link from "next/link";
export default function Menu() {
  return (
    <nav>
      <Link href="/">Blog</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}
