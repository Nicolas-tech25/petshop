import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPost.jsx";
import { useState } from "react";

/* Executada no Servidor back-end */
export async function getStaticProps() {
  console.log("Código de servidor (não aprece no Cliente)...");
  try {
    const resposta = await fetch(`http://10.20.46.26:2112/posts`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
  }
}

export default function Home({ posts }) {
  const [listaDePosts, setListaDePosts] = useState(posts);

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
