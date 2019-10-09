import React, { Component } from 'react';
import FormValidator from '../validator/formValidator';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.stateInicial = {
      nome: '',
      livro: '',
      preco: ''
    };
    this.state = this.stateInicial;
    this.validador = new FormValidator({
      campo: 'nome',
      metodo: 'isEmpty'
    });
  }

  inputHandler = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    if (this.validador.valida(this.state)) {
      this.props.estutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      console.log('Submit bloqueado');
    }
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className='row'>
          <div className='input-field col s4'>
            <label className='input-field' htmlFor='nome'>
              Nome
            </label>
            <input
              className='validate'
              id='nome'
              type='text'
              name='nome'
              value={nome}
              onChange={this.inputHandler}
            />
          </div>
          <div className='input-field col s4'>
            <label className='input-field' htmlFor='livro'>
              Livro
            </label>
            <input
              className='validate'
              id='livro'
              type='text'
              name='livro'
              value={livro}
              onChange={this.inputHandler}
            />
          </div>
          <div className='input-field col s4'>
            <label className='input-field' htmlFor='preco'>
              Preço
            </label>
            <input
              className='validate'
              id='preco'
              type='text'
              name='preco'
              value={preco}
              onChange={this.inputHandler}
            />
          </div>
        </div>

        <button
          type='button'
          onClick={this.submitForm}
          className='waves-effect waves-light orange lighten-2 btn'
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
