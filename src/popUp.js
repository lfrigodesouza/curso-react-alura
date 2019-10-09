import M from 'materialize-css';

const PopUp = {
  exibeMensagem: (status, mensagem) => {
    if (status === 'success') {
      M.toast({ html: mensagem, classes: 'green', displaylength: 2000 });
    }
    if (status === 'error') {
      M.toast({ html: mensagem, classes: 'red', displaylength: 2000 });
    }
    if (status === 'removed') {
      M.toast({ html: mensagem, classes: 'blue', displayLength: 2000 });
    }
  }
};

export default PopUp;
