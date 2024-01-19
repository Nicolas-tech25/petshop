import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Missão, visão e valores do nosso PetShop"
        />
        <meta name="keywords" content="petshop, missão, visão, valores" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>

        <h3>Missão</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic amet,
          explicabo qui assumenda expedita veniam provident ipsum quas maxime,
          delectus temporibus eos. Natus, consequuntur earum!
        </p>

        <h3>Visão</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          cupiditate ut fuga libero quisquam placeat, dolor aliquam. Saepe
          sapiente praesentium quis ad distinctio numquam, corrupti vel non
          aliquam veniam accusamus eos. Nihil, nisi labore aliquid tempora
          provident excepturi quaerat nobis?
        </p>

        <h3>Valores</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          culpa eos dolorum velit dolor tempora!
        </p>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
