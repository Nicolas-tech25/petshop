import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPost.jsx";
import { useState } from "react";
import serverApi from "./api/server";
/* Executada no Servidor back-end */
export async function getStaticProps() {
  console.log("Código de servidor (não aprece no Cliente)...");
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = dados.map((post) => post.categoria);
    /* Gerando umm array de categorias únicas */
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [categoria, setCategoria] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const aplicarFiltro = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;

    const postsFiltrados = categoriaEscolhida
      ? posts.filter((post) => post.categoria === categoriaEscolhida)
      : posts;

    setCategoria(categoriaEscolhida);
    setListaDePosts(postsFiltrados);
    setFiltroAtivo(true);

    // Sinalizando state com o texto/categoria escolhida
    setCategoriaAtiva(categoriaEscolhida);
  };
  const limparFiltro = () => {
    setFiltroAtivo(false);
    setListaDePosts(posts);
    setCategoriaAtiva("");
  };

  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="PetShop, Banho, Ração, Gato, Cachorro" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return (
              <button
                className={categoria === categoriaAtiva ? "ativo" : ""}
                key={indice}
                onClick={aplicarFiltro}
              >
                {categoria}
              </button>
            );
          })}
          {filtroAtivo && (
            <button onClick={limparFiltro} className="limpar">
              Limpar filtro
            </button>
          )}
        </StyledCategorias>
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
const StyledCategorias = styled.section`
  button {
    text-transform: capitalize;
    background-color: var(--cor-primaria-fundo);
    border: none;
    color: white;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo);
      cursor: pointer;
    }
    &.ativo {
      background-color: var(--cor-secundaria-fundo);
    }
  }
  .limpar {
    background-color: #a1a1a1;
    &:hover {
      background-color: slategray;
    }
    &::before {
      content: "🧼";
    }
  }
`;
