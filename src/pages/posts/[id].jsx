import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);
  try {
    const resposta = await fetch(`${serverApi}/posts/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {}
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export default function Post() {
  return (
    <>
      <Head>
        <title>Título do Post... - petShop</title>
        <meta name="description" content="Descrição do post..." />
      </Head>

      <StyledPost>
        <h2>Título...</h2>
        <Container>
          <h3>Categoria do Post...</h3>
          <p>Descrição do post...</p>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article``;
