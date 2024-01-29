// ListaCategorias.jsx
import styled from "styled-components";

export default function ListaCategorias({
  categorias,
  aplicarFiltro,
  limparFiltro,
  filtroAtivo,
  categoriaAtiva,
}) {
  return (
    <StyledCategorias>
      {categorias.map((categoria, indice) => (
        <button
          className={categoria === categoriaAtiva ? "ativo" : ""}
          key={indice}
          onClick={aplicarFiltro}
        >
          {categoria}
        </button>
      ))}
      {filtroAtivo && (
        <button onClick={limparFiltro} className="limpar">
          Limpar filtro
        </button>
      )}
    </StyledCategorias>
  );
}

const StyledCategorias = styled.section`
  button {
    text-transform: capitalize;
    background-color: var(--cor-primaria-fundo);
    border: none;
    color: white;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo);
      cursor: pointer;
    }
    &.ativo {
      background-color: var(--cor-secundaria-fundo);
    }
  }
  .limpar {
    background-color: #a1a1a1;
    &:hover {
      background-color: slategray;
    }
    &::before {
      content: "🧼";
    }
  }
`;
