import React, { Component } from 'react';
import FormValidator from '../validator/formValidator';
import PopUp from '../popUp';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.validador = new FormValidator([
      {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Informe um nome'
      },
      {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Livro inválido'
      },
      {
        campo: 'preco',
        metodo: 'isInt',
        validoQuando: true,
        args: [{ min: 0, max: 9999 }],
        mensagem: 'Entre com um valor numérico'
      }
    ]);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validador.valid()
    };
    this.state = this.stateInicial;
  }

  inputHandler = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    const validacao = this.validador.valida(this.state);
    if (validacao.isValid) {
      this.props.estutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];
      const camposInvalidos = campos.filter(campo => {
        return campo.isInvalid;
      });
      camposInvalidos.forEach(campo => {
        PopUp.exibeMensagem('error', campo.message);
      });
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
