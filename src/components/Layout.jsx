import Link from "next/link";
export default function Layout() {
  return (
    <>
      <header>
        <h1>PetShop</h1>
        <nav>
          <Link href="/">Blog</Link>
          <Link href="/">Produtos</Link>
          <Link href="/">Sobre</Link>
          <Link href="/">Contato</Link>
        </nav>
      </header>
    </>
  );
}
