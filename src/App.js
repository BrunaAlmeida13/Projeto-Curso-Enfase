import React, {Component} from 'react';

import './assets/App.css';
import './assets/index.css';
import ListaQuestaoMultiplaEscolha from "./components/ListaQuestaoMultiplaEscolha";
import FormularioQuestaoERespostas from "./components/FormularioQuestaoERespostas";

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      questoes: []
    };
  }

  criarQuestao(questao, resp1, resp2, resp3, resp4, respCorreta) {
    const novaQuestao = {questao, resp1, resp2, resp3, resp4, respCorreta};
    const novoArrayQuestoes = [...this.state.questoes, novaQuestao]
    const novoEstado = {
      questoes: novoArrayQuestoes
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="body">
        <h1>Gerenciador de questões de múltipla escolha</h1>

        <FormularioQuestaoERespostas criarQuestao={this.criarQuestao.bind(this)}/>

        <ListaQuestaoMultiplaEscolha questoes={this.state.questoes}/>    
      </section>
    );
  }
}

export default App;
