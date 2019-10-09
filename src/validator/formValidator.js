import validador from 'validator';

export default class FormValidator {
  constructor(validacao) {
    this.validacao = validacao;
  }

  valida(state) {
    const campoValor = state[this.validacao.campo.toString()];
    const metodoValidacao = validador[this.validacao.metodo];
    if (metodoValidacao(campoValor, [], state)) {
      console.log('Formulario invalido');
      return false;
    } else {
      console.log('Form válido');
      return true;
    }
  }
}
