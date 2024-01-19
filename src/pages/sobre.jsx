import Head from "next/head";
export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="conheça um pouco mais sobrea nossa empresa"
        ></meta>
      </Head>

      <section>
        <h2>Sobre nosso PetShop</h2>
      </section>
    </>
  );
}
const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
