import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
  const rotaAtual = usePathname();

  return (
    <StyledNav>
      <Link href="/" className={rotaAtual == "/" ? "ativo" : ""}>
        Blog
      </Link>
      <Link
        href="/produtos"
        className={rotaAtual == "/produtos" ? "ativo" : ""}
      >
        Produtos
      </Link>
      <Link href="/sobre" className={rotaAtual == "/sobre" ? "ativo" : ""}>
        Sobre
      </Link>
      <Link href="/contato" className={rotaAtual == "/contato" ? "ativo" : ""}>
        Contato
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo);
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  a.ativo {
    background-color: var(--cor-secundaria-fundo);
  }
`;
