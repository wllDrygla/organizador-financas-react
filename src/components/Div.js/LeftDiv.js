import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import TableMetas from "../Metas/TableMetas";

const LeftDivStyle = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}
`
const LeftDiv = (props) => {
    return (
        <LeftDivStyle>
        <TitleContent content={`SISTEMA DE METAS (em teste):`}></TitleContent>

        <TableMetas user={props.user} status='PENDENTE'></TableMetas>
        <TableMetas user={props.user} status='FAZENDO'></TableMetas>
        <TableMetas user={props.user} status='FINALIZADO'></TableMetas>
      </LeftDivStyle>
    )
};

export default LeftDiv;