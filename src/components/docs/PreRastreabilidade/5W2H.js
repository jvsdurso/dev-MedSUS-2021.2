import React from 'react'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'


const i5W2H = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="5W2H" author="Thalisson e Gabriel Costa"/>

    <Card>
        <h2>Rastreabilidade</h2>
        <ul>
            <li><Link smooth to='/Questionario'>Questionario</Link></li>
        </ul>
    </Card>

    <Card>
        <h2>What</h2>
        <p>Um aplicativo que reúne informações sobre medicamentos presentes na Relação Nacional de Medicamentos Essencais (Rename) do Sistem Único de Saúde (SUS), onde é possível pesquisar por medicações e ser atualizado sobre mudanças/adições. O aplicativo deve reunir informações confiáveis de medicamentos e essas informações podem ser usadas por médicos gestores do SUS ou pela população.</p>
    </Card>

    <Card>
        <h2>Why</h2>
        <p>O uso racional de medicamentos é um processo que compreende uma prescrição adequada, a dispensação orientada,
            disponibilidade e custo acessível da medicação e ainda seu uso na dose correta e pelo
            tempo adequado em intervalos definidos. Sendo assim, a informação sobre os medicamentos se torna um
            requisito básico para o sucesso terapêutico, assim como para a garantia da utilização de medicamentos eficazes,
            seguros e de qualidade. Além dos profissionais da área da saúde, os pacientes ou usuários de medicamentos também
            devem receber informações acerca dos medicamentos, a fim de se obter melhor resolutividade dos problemas de saúde da população.</p>
    </Card>

    <Card>
        <h2>Where</h2>
        <p>Uma aplicação mobile, pois permite o gerenciamento em tempo real das tarefas, tanto em inserção e acompanhamento das atividades diárias, e uma aplicação Web para permitir melhor integração entre as plataforma de acordo com o que for melhor ao usuário.</p>
    </Card>

    <Card>
        <h2>When</h2>
        <p>O aplicativo foi lançado em 2014 e reformulado completamente em 2019.</p>
    </Card>

    <Card>
        <h2>Who</h2>
        <p>O MedSuS é um aplicativo disponibilizado pelo Ministério da saúde. Quem deve fazer, portanto, são os times de desenvolvimento compostos pelos próprios servidores públicos do Ministério da Saúde, ou uma empresa de desenvolvimento contratada por meio de licitação, caso não haja capacidade técnica suficiente dentro da equipe própria do Ministério. </p>
    </Card>

    <Card>
        <h2>How</h2>
        <p>Aplicação em Android e iOS, com tecnologia Ionic 2</p>
    </Card>

    <Card>
        <h2>How Much</h2>
        <p>intermediando</p>
    </Card>

    <Card>
        <h2>Referências</h2>
        <p>ENDEAVOR. 5W2H: o que é e como aplicar: 5W2H: é hora de tirar as dúvidas e colocar a produtividade no seu dia a dia. [S. l.], 8 fev. 2017. Disponível em: https://endeavor.org.br/pessoas/5w2h/. Acesso em: 20 fev. 2022.</p>
        <p>FIA. 5W2H: o que é, como funciona e por que você deveria usar?. [S. l.], 11 fev. 2020. Disponível em: https://fia.com.br/blog/5w2h/. Acesso em: 20 fev. 2022.</p>
        <p>RABELO, Flávia Lúcia; ALMEIDA, Fabiana. MedSUS: o aplicativo dos medicamentos. Brasília, 4 abr. 2014. Disponível em: https://referenciabibliografica.net/a/pt-br/ref/abnt. Acesso em: 20 fev. 2022.</p>
    </Card>

    </div>
  )
}

export default i5W2H