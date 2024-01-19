import Head from "next/head";
export default function Home() {
  return (
    <>
      <StyledHome>
        <title>PetShop 2024</title>
        <meta name="description" content="Blog  para tirar dúvidas"></meta>
      </StyledHome>
      <section>
        <h2>Pet Notícias</h2>
      </section>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
