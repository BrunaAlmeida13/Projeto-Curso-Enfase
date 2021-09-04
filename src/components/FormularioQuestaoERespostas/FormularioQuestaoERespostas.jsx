import React, { Component } from "react";

import "./estilo.css";

class FormularioQuestaoERespostas extends Component {
    
    constructor(props) {
        super(props);
        this.pergunta = "";
        this.resp1 = "";
        this.resp2 = "";
        this.resp3 = "";
        this.resp4 = "";
    }

    _handleMudancaQuestao(evento) {
        this.questao = evento.target.value;
    }

    _handleMudancaResp1(evento) {
        this.resp1 = evento.target.value;
    }

    _handleMudancaResp2(evento) {
        this.resp2 = evento.target.value;
    }

    _handleMudancaResp3(evento) {
        this.resp3 = evento.target.value;
    }

    _handleMudancaResp4(evento) {
        this.resp4 = evento.target.value;
    }

    _handleRespostaCorreta(evento){
        this.respCorreta = evento.target.value;
    }
    
    _criarQuestao(evento) {
        evento.preventDefault(); //prevenindo o evento de recarregar a pagina, ao form ser submetido
        evento.stopPropagation(); //evitando a propagação desse evento no DOM

        this.props.criarQuestao(this.questao, this.resp1, this.resp2, this.resp3, this.resp4, this.respCorreta);
    }

    render() {
        return (
            <form onSubmit={this._criarQuestao.bind(this)} className="form-body">
                <p>Pergunta:<input type="text" onChange={this._handleMudancaQuestao.bind(this)} className="input-pergunta"></input></p>
                <p>Resposta 1:<input type="text" onChange={this._handleMudancaResp1.bind(this)}></input></p>
                <p>Resposta 2:<input type="text" onChange={this._handleMudancaResp2.bind(this)}></input></p>
                <p>Resposta 3:<input type="text" onChange={this._handleMudancaResp3.bind(this)}></input></p>
                <p>Resposta 4:<input type="text" onChange={this._handleMudancaResp4.bind(this)}></input></p>

                <p>Número da resposta correta:<input type="number" min="1" max="4" onChange={this._handleRespostaCorreta.bind(this)} className="input-resp"></input></p>

                <p><button>Criar questão</button></p>
            </form>
        );
    }
}

export default FormularioQuestaoERespostas;