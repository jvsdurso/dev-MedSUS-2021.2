import React from "react";
import NCardsLayout from "../../UI/NCardsLayout/NCardsLayout";
import dictionary from "../../../assets/dictionary.png";
import route from "../../../assets/destination.svg";
import NFR from "../../../assets/NFR.svg";
import CasosDeUso from "../../../assets/CasosDeUso.svg";
import Suplementar from "../../../assets/Suplementar.svg";
import richpictureIcon from "../../../assets/rich-picture.svg";

const items = [
  {
    link: "/VerificacaoCasoUso",
    img: CasosDeUso,
    title: "Casos de Uso"
  },
  {
    link: "/VerificacaoCenarios",
    img: route,
    title: "Cenários"
  },
  {
    link: "/VerificacaoSuplementarV2",
    img: Suplementar,
    title: "Especificação Suplementar"
  },
  {
    link: '/VerificacaoLexico',
    img: dictionary,
    title: "Léxicos"
  },
  {
    link: "/VerificacaoNFR",
    img: NFR,
    title: "NFR"
  },
  {
    link: "/VerificacaoRP",
    img: richpictureIcon,
    title: "Rich Pictures"
  }
];

const Verificacao = props => (
  <div className="content artefact">
    <h1>Verificação</h1>
    <NCardsLayout items={items} />
  </div>
);

export default Verificacao;
