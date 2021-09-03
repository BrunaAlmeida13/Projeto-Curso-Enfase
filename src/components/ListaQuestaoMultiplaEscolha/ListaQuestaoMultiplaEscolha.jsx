import React, { Component } from "react";

import QuestaoERespostas from "../QuestaoERespostas";
import "./estilo.css";

class ListaQuestaoMultiplaEscolha extends Component {
    
    /*
        constructor(props){
            super(props);
        } -Construtor implícito- 
    */
    
    render() {
        return(
            <ul>
                {this.props.questoes.map((questaoCriada, index) => {
                    return (
                    <li key={index}>
                        <div>
                            <QuestaoERespostas questao={questaoCriada.questao} resp1={questaoCriada.resp1} resp2={questaoCriada.resp2} resp3={questaoCriada.resp3} resp4={questaoCriada.resp4} respCorreta={questaoCriada.respCorreta}/>
                        </div>
                    </li> 
                    );
                })}
            </ul>
        );
    }
}

export default ListaQuestaoMultiplaEscolha;