import React from "react";
import './Sobre.scss';

const Sobre = () => (
    <div className="content artefact">
        <h1>Planejamento</h1>
        <div>
            <div className="topico-container">
                <h2>Metodologia Ágil</h2>
                <li>Scrum</li>
                <p>Adaptaremos processos do framework Scrum para o nosso projeto. O Scrum é um método que segue as heurísticas ágeis, o que pode ajudar um time menor em um projeto de software, como o nosso. Serão utilizados:</p>
            </div>
            <hr/>
            <div className="topico-container">
                <li>Sprints</li>
                <p>Planejamento semanal e iterativo. A duração da sprint será de 1 semana. Antes do Planejamento da Sprint, há o Sprint Review, discutindo a sprint anterior, rendimento, pontos bons, pontos ruins e pontos de melhoria. Faremos o Sprint Planning (Planejamento) para cada semana, todo domingo.</p>
            </div>
            <hr/>
            <div className="topico-container">
                <li>Issues</li>
                <p>São as tarefas planejadas nas sprints, com os responsáveis e as subtarefas necessárias.</p>
            </div>
            <hr/>
            <div className="topico-container">
                <h2>Kanban</h2>
                <p>Utilizaremos Kanban por meio do software Trello, organizando cards e zonas. Com o Kanban conseguiremos organizar nossas entregas, alocar responsáveis para tarefas e revisões e verificar gargálos nas entregas.</p>
            </div>
            <hr/>
        </div>
    </div>
);

export default Sobre;

