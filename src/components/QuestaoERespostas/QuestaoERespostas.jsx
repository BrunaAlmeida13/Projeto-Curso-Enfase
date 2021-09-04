/* eslint-disable react/jsx-no-comment-textnodes */
import React, {Component} from "react";

import "./estilo.css";

class QuestaoERespostas extends Component {
    render() {
        return(
            <div className="questao-e-respostas">
                <p>Pergunta: {this.props.questao}</p>
            
                <div className="div-input-box">
                <input type="radio" name="rdResp" id="resp1"/>{this.props.resp1}
                <input type="radio" name="rdResp" id="resp2"/>{this.props.resp2}
                <input type="radio" name="rdResp" id="resp3"/>{this.props.resp3}
                <input type="radio" name="rdResp" id="resp4"/>{this.props.resp4}
                </div>

                <p className="questao-correta" /*A proposta aqui seria a de aparecer a resposta correta apenas quando a questão for respondida.*/>
                    Questão correta: {this.props.respCorreta}
                </p> 
            </div>
        );
    }
}

export default QuestaoERespostas;