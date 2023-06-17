import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import Resumo from "../Finance/Resumo";
import TableMetas from "../Metas/TableMetas";
import CadastroMeta from "../Metas/CadastroMetas";
import CadastroFinanca from "../Finance/CadastroFinanca";

const CenterDivStyle = styled.div`
text-align: center;
width:30%;
margin:1% ;

@media (max-width: 768px) {
  width: 100%;
  
}`

const CenterDivFinance = (props) => {
  return (
    <CenterDivStyle>
      <TitleContent content={`PENDÊNCIAS MENSAIS:`}></TitleContent>
      <Resumo month={props.month} user={props.user} />
      <CadastroFinanca user={props.user} />

    </CenterDivStyle>
  )
};

const CenterDivTask = (props) => {
  return (
    <CenterDivStyle>

<TableMetas user={props.user} status='FAZENDO'></TableMetas>
<CadastroMeta user={props.user}></CadastroMeta>

    </CenterDivStyle>
  )
};

export {CenterDivFinance, CenterDivTask};