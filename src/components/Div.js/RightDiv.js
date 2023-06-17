import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import Table from "../TableCategory/TableCategory";
import TableCategory from "../TableCategory/TableCategory";
import TableMetas from "../Metas/TableMetas";

const RightDivStyle = styled.div`
text-align: center;
width:30%;
margin:1% ;

@media (max-width: 768px) {
  width: 100%;
}
`

const RightDivFinance = (props) => {
  return (
    <RightDivStyle>
      <TitleContent content={`FINANÇAS MENSAIS:`}></TitleContent>
      <TableCategory user={props.user} category='gasto' month={props.month}> </TableCategory>
      <TableCategory user={props.user} category='ganho' month={props.month}></TableCategory>
      <TableCategory user={props.user} category='investimento' month={props.month}></TableCategory>
    </RightDivStyle>
  )
};

const RightDivTask = (props) => {
  return (
    <RightDivStyle>
      <TableMetas user={props.user} status='FINALIZADO'></TableMetas>
    </RightDivStyle>
  )
}

export { RightDivFinance, RightDivTask };