import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import Resumo from "../Finance/Resumo";
import TableMetas from "../Metas/TableMetas";

const CenterDivStyle = styled.div`
text-align: center;
max-width:900px;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}`

const CenterDiv = (props) => {
  return (
    <CenterDivStyle>


      <TitleContent content={`PENDÊNCIAS MENSAIS:`}></TitleContent>
      <Resumo month={props.month} user={props.user} />

      <TitleContent content={`SISTEMA DE METAS (em teste):`}></TitleContent>

<TableMetas user={props.user} status='PENDENTE'></TableMetas>
<TableMetas user={props.user} status='FAZENDO'></TableMetas>
<TableMetas user={props.user} status='FINALIZADO'></TableMetas>
      
    </CenterDivStyle>
  )
};

export default CenterDiv;