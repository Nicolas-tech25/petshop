import Head from "next/head";
export default function Contato() {
  return (
    <>
      <StyledContato>
        <title>Contato - PetShop</title>
        <meta name="description" content="Entre em contato conosco "></meta>
      </StyledContato>
      <section>
        <h2>Fale conosco</h2>
      </section>
    </>
  );
}
const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }
`;
