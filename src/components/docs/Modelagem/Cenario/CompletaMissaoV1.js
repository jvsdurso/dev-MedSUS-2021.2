import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CompletaMissao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Completa Missão" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p><Link to="/Grupo">Grupo</Link> cumprir requisitos para completar uma <Link to="/Missão">Missão</Link></p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: Estar Logado; Requisitos de <Link to="/Missão">Missão</Link> terem sido completos</li>
        <li>Local: Qualquer Tela</li>
        <li>Tempo: Ao cumprir os requisitos de uma <Link to="/Missão">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li><Link to="/Membros">Membros do Grupo</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Recompensas</li>
        <li>Medalha</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li><Link to="/Membros">Membros do Grupo</Link> recebem Recompensas</li>
        <li><Link to="/Membros">Membros do Grupo</Link> recebem Medalha</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Ter participado da <Link to="/Missão">Missão</Link></li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Se houver uma <Link to="/Missão">Missão</Link> em sequência ela será desbloqueada para todos os <Link to="/Membros">Membros do Grupo</Link></li>
      </ul>
    </Card>

  </div>
)

export default CompletaMissao