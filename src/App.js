import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/HOC/ScrollToTop/ScrollToTop'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Disciplina from './components/docs/Disciplina/Disciplina'

import Modelagem from './components/docs/Modelagem/Modelagem'
import Lexico from './components/docs/Modelagem/Lexico/Lexico'
import Cenario from './components/docs/Modelagem/Cenario/Cenario'
import PreRastreabilidade from './components/docs/PreRastreabilidade/PreRastreabilidade'
import RichPicture from './components/docs/PreRastreabilidade/RichPicture'
import Elicitacao from './components/docs/Elicitacao/Elicitacao'
import Sobre from './components/docs/sobre/Sobre'
import lexicos from './utils/lexicos'
import RoutesCenarios from './utils/RoutesCenarios'
import NFR from './components/docs/Modelagem/NFR/nfr'
import NFRV1 from './components/docs/Modelagem/NFR/nfrv1'
import NFRV2 from './components/docs/Modelagem/NFR/nfrv2'
import NFRV3 from './components/docs/Modelagem/NFR/nfrv3'
import enUSNFRV3 from './components/docs/Modelagem/NFR/enUSnfrv3'

import GIFSComponent from './components/docs/PosRastreabilidade/GIFS'
import GIFS from './components/docs/PosRastreabilidade/GIFS.json'

import Priorizacao from './components/docs/Elicitacao/Priorizacao'
import Requisitos from './components/docs/Elicitacao/Requisitos'
import BrainstormV1 from './components/docs/Elicitacao/Brainstorm/BrainstormV1'
import BrainstormV2 from './components/docs/Elicitacao/Brainstorm/BrainstormV2'
import Entrevistas from './components/docs/Elicitacao/Entrevistas/Entrevistas'
import Entrevista01 from './components/docs/Elicitacao/Entrevistas/Entrevista01'
import Entrevista02 from './components/docs/Elicitacao/Entrevistas/Entrevista02'
import Introspeccao from './components/docs/Elicitacao/Introspeccao'
import i5W2H from './components/docs/PreRastreabilidade/5W2H'
import Analise01 from './components/docs/Elicitacao/AnaliseProtocolo/Analise01'
import Analise02V1 from './components/docs/Elicitacao/AnaliseProtocolo/Analise02V1'
import Analise02 from './components/docs/Elicitacao/AnaliseProtocolo/Analise02'
import MoSCoW from './components/docs/Elicitacao/MoSCoW'
import FirstThingsFirst from './components/docs/Elicitacao/FirstThingsFirst'

import CasosDeUso from './components/docs/Modelagem/CasosDeUso/CasosDeUso'
import Diagramas from './components/docs/Modelagem/CasosDeUso/Diagramas'
import CasosObj from './components/docs/Modelagem/CasosDeUso/CasosDeUsoObj'
import CasoDeUsoBase from './components/docs/Modelagem/CasosDeUso/CasoDeUsoBase'
import EspecificacaoSuplementarV1 from './components/docs/Modelagem/EspecificacaoSuplementar/EspecificacaoSuplementarV1'
import EspecificacaoSuplementarV2 from './components/docs/Modelagem/EspecificacaoSuplementar/EspecificacaoSuplementarV2'

import StoryTelling01 from './components/docs/Elicitacao/StoryTelling01'
import StoryTelling01V1 from './components/docs/Elicitacao/StoryTelling01V1'
import StoryTelling02 from './components/docs/Elicitacao/StoryTelling02'
import Analise from './components/docs/Analise/Analise'
import Verificacao from './components/docs/Analise/Verificacao'

import PosRastreabilidade from './components/docs/PosRastreabilidade/PosRastreabilidade'
import ForwardFrom from './components/docs/PosRastreabilidade/ForwardFrom'
import BackwardFrom from './components/docs/PosRastreabilidade/BackwardFrom'
import BackwardFromv1 from './components/docs/PosRastreabilidade/BackwardFromv1'
import Validacao from './components/docs/Analise/Validacao'
import Prototipo from './components/docs/Analise/Prototipo'
import WikiOficial from './components/docs/Analise/WikiOficial'

import VerificacaoCasoUso from './components/docs/Analise/VerificacaoCasoUso'
import VerificacaoSuplementarV1 from './components/docs/Analise/VerificacaoSuplementarV1'
import VerificacaoSuplementarV2 from './components/docs/Analise/VerificacaoSuplementarV2'
import VerificacaoNFR from './components/docs/Analise/VerificacaoNFR'
import VerificacaoRP from './components/docs/Analise/VerificacaoRP'
import VerificacaoAgil from './components/docs/Analise/VerificacaoAgil'
import VerificacaoLexico from './components/docs/Analise/VerificacaoLexico'
import VerificacaoCenarios from './components/docs/Analise/VerificacaoCenarios'

import EmailMatteo from './components/docs/Analise/ValidacaoEmail'
import EmailAlys from './components/docs/Analise/EmailAlys'

const RouteRollUp = props => <Route {...props} onUpdate={() => window.scrollTo(0, 0)} />

const App = () => {

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <NavBar>
            <Switch>
              <RouteRollUp exact path="/" component={LandingPage} />
              <RouteRollUp exact path="/Disciplina" component={Disciplina} />
              <RouteRollUp
                exact
                path="/Pre-Rastreabilidade"
                component={PreRastreabilidade}
              />
              <RouteRollUp exact path="/RichPictures" component={RichPicture} />
              <RouteRollUp exact path="/Pos-Rastreabilidade" component={PosRastreabilidade} />
              <RouteRollUp exact path="/Elicitacao" component={Elicitacao} />
              <RouteRollUp exact path="/Modelagem" component={Modelagem} />
              <RouteRollUp exact path="/Analise" component={Analise} />
              <RouteRollUp exact path="/Sobre" component={Sobre} />
              <RouteRollUp exact path="/GIFS" component={GIFS} />

              {/* Elicitação */}
              <RouteRollUp
                exact
                path="/RequisitosElicitacao"
                component={Requisitos}
              />

              <RouteRollUp
                exact
                path="/AnaliseProtocolo01"
                component={Analise01}
              />
              <RouteRollUp
                exact
                path="/AnaliseProtocolo02V1"
                component={Analise02V1}
              />
              <RouteRollUp
                exact
                path="/AnaliseProtocolo02"
                component={Analise02}
              />
              <RouteRollUp exact path="/BrainstormV1" component={BrainstormV1} />
              <RouteRollUp exact path="/Brainstorm" component={BrainstormV2} />
              <RouteRollUp exact path="/Entrevista" component={Entrevistas} />
              <RouteRollUp exact path="/Entrevista/01" component={Entrevista01} />
              <RouteRollUp exact path="/Entrevista/02" component={Entrevista02} />
              <RouteRollUp exact path="/Introspeccao" component={Introspeccao} />
              <RouteRollUp exact path="/Persona" component={Requisitos} />
              <RouteRollUp
                exact
                path="/Storytelling01V1"
                component={StoryTelling01V1}
              />
              <RouteRollUp
                exact
                path="/Storytelling01"
                component={StoryTelling01}
              />
              <RouteRollUp
                exact
                path="/Storytelling02"
                component={StoryTelling02}
              />
              <RouteRollUp exact path="/5W2H" component={i5W2H} />

              <RouteRollUp exact path="/Priorizacao" component={Priorizacao} />
              <RouteRollUp exact path="/MoSCoW" component={MoSCoW} />
              <RouteRollUp exact path="/FirstThingsFirst" component={FirstThingsFirst} />

              {/* Modelagem */}
              <RouteRollUp path="/Lexicos" component={Lexico} />
              <RouteRollUp path="/Cenarios" component={Cenario} />
              <RouteRollUp path="/CasosDeUso" component={CasosDeUso} />
              <RouteRollUp
                path="/EspecificacaoSuplementarV1"
                component={EspecificacaoSuplementarV1}
              />
              <RouteRollUp
                path="/EspecificacaoSuplementar"
                component={EspecificacaoSuplementarV2}
              />
              <RouteRollUp path="/NFR" component={NFR} />
              <RouteRollUp path="/NFR V1" component={NFRV1} />
              <RouteRollUp path="/NFR V2" component={NFRV2} />
              <RouteRollUp path="/NFR V3" component={NFRV3} />
              <RouteRollUp path="/NFR V3 enUS" component={enUSNFRV3} />

              {/* Analise */}
              <RouteRollUp path="/Verificacao" component={Verificacao} />
              <RouteRollUp path="/VerificacaoCasoUso" component={VerificacaoCasoUso} />
              <RouteRollUp path="/VerificacaoSuplementarV1" component={VerificacaoSuplementarV1} />
              <RouteRollUp path="/VerificacaoSuplementarV2" component={VerificacaoSuplementarV2} />
              <RouteRollUp path="/VerificacaoNFR" component={VerificacaoNFR} />
              <RouteRollUp path="/VerificacaoRP" component={VerificacaoRP} />
              <RouteRollUp path="/VerificacaoAgil" component={VerificacaoAgil} />
              <RouteRollUp path="/Validacao" component={Validacao} />
              <RouteRollUp path="/VerificacaoLexico" component={VerificacaoLexico} />
              <RouteRollUp path="/VerificacaoCenarios" component={VerificacaoCenarios} />
              <RouteRollUp path="/Prototipo" component={Prototipo} />
              <RouteRollUp path="/WikiOficial" component={WikiOficial} />
              <RouteRollUp path="/emailMatteo" component={EmailMatteo} />
              <RouteRollUp path="/emailAlys" component={EmailAlys} />

              {/* Pos Rastreabilidade */}
              <RouteRollUp path="/ForwardFrom" component={ForwardFrom} />
              <RouteRollUp path="/BackwardFrom" component={BackwardFrom} />
              <RouteRollUp path="/BackwardFromv1" component={BackwardFromv1} />


              {/* Automatizando várias rótas */}
              {Object.keys(lexicos).map(group =>
                Object.keys(lexicos[group].lexic).map(term => (
                  <Route
                    key={term}
                    path={`/${term}`}
                    component={lexicos[group].lexic[term]}
                    onUpdate={() => window.scrollTo(0, 0)}
                  />
                ))
              )}

              {Object.keys(RoutesCenarios).map(group =>
                Object.keys(RoutesCenarios[group].lexic).map(term => (
                  <Route
                    key={term}
                    path={`/${term}`}
                    component={RoutesCenarios[group].lexic[term]}
                    onUpdate={() => window.scrollTo(0, 0)}
                  />
                ))
              )}

              {GIFS.map(gif => (
                <Route
                  path={`/US/${gif.id}`}
                  render={() => (
                    <GIFSComponent id={gif.id} description={gif.description} frontEnd={gif.frontEnd} backEnd={gif.backEnd} frontReference={gif.frontReference} backReference={gif.backReference} acceptanceCriteria={gif.acceptanceCriteria} />
                  )}
                />
              ))}

              {Object.keys(CasosObj).map(casos => (
                <Route
                  path={`/CasosDeUso${casos}`}
                  render={() => (
                    <CasoDeUsoBase info={CasosObj[casos]} title={casos} />
                  )}
                />
              ))}

              {Object.keys(CasosObj).map(casos =>
                CasosObj[casos].images.map((image, i) => (
                  <Route
                    path={`/DiagramasCasoUso/${casos}/V${i + 1}`}
                    render={() => (
                      <Diagramas
                        title={`${casos} V${i + 1}`}
                        author={CasosObj[casos].author}
                        image={image}
                        x={CasosObj[casos].x}
                        y={CasosObj[casos].y}
                      />
                    )}
                  />
                ))
              )}
            </Switch>
          </NavBar>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
