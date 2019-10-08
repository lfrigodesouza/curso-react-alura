import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const linhas = props.autores.map((autor, index) => {
    return (
      <tr key={index}>
        <td>{autor.nome}</td>
        <td>{autor.livro}</td>
        <td>{autor.preco}</td>
        <td>
          <button
            onClick={() => {
              props.removeAutor(index);
            }}
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{linhas}</tbody>;
};

class Tabela extends Component {
  state = {};
  render() {
    const { autores, removeAutor } = this.props;
    return (
      <tabe>
        <TableHead />
        <TableBody autores={autores} removeAutor={removeAutor} />
      </tabe>
    );
  }
}

export default Tabela;
