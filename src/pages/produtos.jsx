import Head from "next/head";
export default function Produtos() {
  return (
    <>
      <StyledProdutos>
        <title>Produtos - PetShop</title>
        <meta
          name="description"
          content="Produtos pra comprar pro seu Pet"
        ></meta>
      </StyledProdutos>

      <section>
        <h2>Conheça nosso Petshop</h2>
      </section>
    </>
  );
}
const StyledProdutos = styled.section`
  h2::before {
    content: "🎁";
  }
`;
