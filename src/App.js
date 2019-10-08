import React, { Component } from 'react';
import Tabela from './components/tabela';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'DotNet',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  };

  removerAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, indexAutor) => {
        return index != indexAutor;
      })
    });
  };

  render() {
    return (
      <div className='App'>
        <Tabela autores={this.state.autores} removeAutor={this.removerAutor} />
      </div>
    );
  }
}

export default App;
