import React from 'react';
import CardEquipe from './CardEquipe';

import './about.css';

const Equipe = () => {
    return (
        <div className="container-equipe display-flex flex-direction-row align-items-center justify-content-space-evenly text-align-center">
            <CardEquipe
                nomeEquipe="Profissional A"
                imagemEquipe="images/profissionalA.png"
                profissaoEquipe="Profissional A"
                textoEquipe="XX anos de experiência sendo X anos nas áreas de Custos e Planejamento em indústrias e 
                distribuidoras e X anos na área Financeira em lojas de auto peças." />
            <CardEquipe
                nomeEquipe="Profissional B"
                imagemEquipe="images/profissionalB.png"
                profissaoEquipe="Profissional B"
                textoEquipe="X anos de experiência na área de produção, sendo X anos de experiência na área gestão de 
                processos e X anos de experiência em criação e criação de produto." />
        </div>
    )
};

export default Equipe;