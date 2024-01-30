import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);
  try {
    const resposta = await fetch(`${serverApi}/posts/${id}.json`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  /* Paths fica vazio pois todos os caminhos devem ser gerados sobre demanda, ou seja no momento que a página foi aberta */
  return {
    paths: [],
    /* fallback fica como "blocking" para garantir que a página será renderizada somente após da conclusão da geração dos caminhos e dos dados */
    fallback: "blocking",
  };
}
export default function Post({ post }) {
  const tituloPagina = `${post.titulo} - petShop`;
  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content="Descrição do post..." />
      </Head>

      <StyledPost>
        <h2>{post.titulo}</h2>
        <Container>
          <h3>{post.categoria}</h3>
          <p>{post.descricao}</p>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article``;
