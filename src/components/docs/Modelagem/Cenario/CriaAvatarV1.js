import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const CriaAvatar = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Cria Avatar V1" author="Pedro Féo"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Criar uma representação virtual do Usuário</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O Usuário deve estar logado</li>
        <li>Local: Tela de criação do Avatar</li>
        <li>Tempo: Durante o primeiro login do usuário</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuários</li>
        <li>Sistema</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li>Nome</li>
        <li>Tipo de Corpo</li>
        <li>Camisa</li>
        <li>Tom de Pele</li>
        <li>Cor do Cabelo</li>
        <li>Estilo do Cabelo</li>
        <li>Flor</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário escolhe Nome</li>
        <li>Usuário escolhe Tipo de Corpo</li>
        <li>Usuário escolhe Camisa</li>
        <li>Usuário escolhe Tom de Pele</li>
        <li>Usuário escolhe Cor do Cabelo</li>
        <li>Usuário escolhe Estilo do Cabelo</li>
        <li>Usuário escolhe Flor</li>
        <li>Usuário informa seus objetivos com o Sistema</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>O Usuário está restrito a escolher um número limitado de itens no momento de criação</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>-</li>
      </ul>
    </Card>

  </div>
)

export default CriaAvatar