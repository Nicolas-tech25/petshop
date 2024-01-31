import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8 ",
      },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados enviados!!");
      router.push("/");
    } catch (error) {
      console.error("Deu ruim no envio" + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          content="Entre em contato conosco pelo formulário abaixo"
        />
        <meta name="keywords" content="petshop, contato" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>

        <Container>
          <form
            autoComplete="off"
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
              />
            </div>

            {/*  é conhecido "Optional chaing [encadeamento opcional] é usado para evitar erros caso um objeto com arrays seja null ou undefinded" */}

            {errors.nome?.type == "required" && (
              <p>Você deve digitar o nome!</p>
            )}

            <div>
              <label htmlFor="email">Email:</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>
            {errors.email?.type == "required" && (
              <p>Você deve digitar o email!</p>
            )}
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                {...register("mensagem", { required: true, minLength: 20 })}
                maxLength={500}
                type="email"
                name="mensagem"
                id="mensagem"
                cols={30}
                rows={8}
              ></textarea>
            </div>
            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar a mensagem!</p>
            )}
            {errors.mensagem?.type == "minLength" && (
              <p>Escreva pelo menos 20 caracteres!</p>
            )}
            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
  form {
    margin: 0 auto;
    width: 50%;
    height: 50%;
    background-color: #9e9d9d62;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
  }

  form > div {
    margin: 2rem;
    & + p {
      color: red;
      font-size: 0.9rem;
      font-style: italic;
      margin-left: 30px;
      margin-bottom: 10px;
    }
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    background-color: #f7f7f7;
    font-size: 1rem;
  }

  button {
    float: center;
    background-color: var(--cor-primaria-fundo);
    color: #f7f7f7;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  button:hover {
    background-color: #45a049;
  }
`;
