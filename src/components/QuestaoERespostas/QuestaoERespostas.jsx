import React, {Component} from "react";

import "./estilo.css";

class QuestaoERespostas extends Component {
    render() {
        return(
            <section className="questao-e-respostas">
                <header className="questao-e-respostas_cabecalho">
                    <p>{this.props.questao}</p>
                </header>
                <p><input type="radio" name="rdResp" value={this.props.resp1}></input></p>
                <p><input type="radio" name="rdResp" value={this.props.resp2}></input></p>
                <p><input type="radio" name="rdResp" value={this.props.resp3}></input></p>
                <p><input type="radio" name="rdResp" value={this.props.resp4}></input></p>
                <p>Questão correta: {this.props.respCorreta}</p>
            </section>
        );
    }
}

export default QuestaoERespostas;