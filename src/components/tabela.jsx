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
  const linhas = props.autores.map(autor => {
    return (
      <tr>
        <td>{autor.nome}</td>
        <td>{autor.livro}</td>
        <td>{autor.preco}</td>
        <td>
          <button>Remover</button>
        </td>
      </tr>
    );
  });
  return <tbody>{linhas}</tbody>;
};

class Tabela extends Component {
  state = {};
  render() {
    const { autores } = this.props;
    return (
      <tabe>
        <TableHead />
        <TableBody autores={autores} />
      </tabe>
    );
  }
}

export default Tabela;
