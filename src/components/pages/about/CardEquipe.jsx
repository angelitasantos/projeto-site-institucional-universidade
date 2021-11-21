import React from 'react';

import './about.css';

const CardEquipe = (props) => {
    return (
        <div className="boxCardEquipe display-flex align-items-center justify-content-space-between">
            <div className="nomeEquipe">
                {props.nomeEquipe}
            </div>
            <img className="imagemEquipe" src={props.imagemEquipe} alt={props.nomeEquipe}/>
            <div className="profissaoEquipe">
                {props.profissaoEquipe}
            </div>
            <div className="textoEquipe">
                {props.textoEquipe}
            </div>
        </div>
    )
}

export default CardEquipe;