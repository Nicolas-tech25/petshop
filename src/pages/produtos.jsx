import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta
          name="description"
          content="Venda de ração, coleira, brinquedo e outros produtos para o seu pet"
        />
        <meta name="keywords" content="Ração, coleira, brinquedo, remédio" />
      </Head>
      <StyledProdutos>
        <h2>Conheça nossos produtos</h2>

        <article>
          <h3>Banho</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aut
            in laudantium consequuntur ullam blanditiis. Ea vero quaerat
            voluptatum mollitia inventore beatae, perspiciatis quia optio.
          </p>
        </article>
        <article>
          <h3>Tosa</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aut
            in laudantium consequuntur ullam blanditiis. Ea vero quaerat
            voluptatum mollitia inventore beatae, perspiciatis quia optio.
          </p>
        </article>
        <article>
          <h3>Diversão</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aut
            in laudantium consequuntur ullam blanditiis. Ea vero quaerat
            voluptatum mollitia inventore beatae, perspiciatis quia optio.
          </p>
        </article>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁 ";
  }
`;
