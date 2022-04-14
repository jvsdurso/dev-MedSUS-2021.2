import React from 'react'
import './Disciplina.scss'
import Contributors from './Contributors/Contributors.js'


const Disciplina = () => (
  <div className="content artefact disciplina">
    <h1>Sobre a Disciplina</h1>

    <h2>Grupo 5 - MedSUS</h2>
    <p>
        Nós somos o Grupo 5 da matéria de Requisitos de Software da Universidade de Brasília. Nosso objetivo com esse repositório é armazenar os artefatos produzidos na aliasse de engenharia reversa do aplicativo MedSUS.
    </p>

    <h2>Professor</h2>
    <p>
      O professor André Barros, responsável por ministrar a matéria de Requisitos de Software, disponibilizou documentos sobre o conteúdo estudado via Aprender3. Além disso, realizou aulas no Microsoft Teams para fixar o conteúdo e/ou retificar os pontos de controle do trabalho final. Também disponibilizou diversos monitores para ajudar os alunos a se direcionarem no projeto.
    </p>
    <ul>
    </ul>
    
    <Contributors/>

  </div>


)

export default Disciplina