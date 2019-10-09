import React, { Component, Fragment } from 'react';
import Tabela from './components/tabela';
import Formulario from './components/formulario';
import './App.css';
import Header from './components/header';
import 'materialize-css/dist/css/materialize.min.css';
import M from './popUp';

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
        return index !== indexAutor;
      })
    });
    M.exibeMensagem('removed', 'Registro removido');
  };

  submitHandler = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
    M.exibeMensagem('success', 'Cadastro realizado com sucesso!');
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container mb-10'>
          <Tabela
            autores={this.state.autores}
            removeAutor={this.removerAutor}
          />
          <Formulario estutadorDeSubmit={this.submitHandler} />
        </div>
      </Fragment>
    );
  }
}

export default App;
