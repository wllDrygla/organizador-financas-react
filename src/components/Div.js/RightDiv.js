import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import Table from "../FinanceTable/Table";
import TableMetas from "../Metas/TableMetas";

const RightDivStyle = styled.div`
text-align: center;
width:30%;
margin:1% ;
@media (min-width: 1920px) {
  width: 35%;
  max-width: 100%;
}
@media (min-width: 1280px) {
  width: 35%;
  max-width: 100%;
}
@media (max-width: 768px) {
  width: 100%;
}
`

const RightDivFinance = (props) => {
  return (
    <RightDivStyle>
      <TitleContent content={`FINANÇAS MENSAIS:`}></TitleContent>
      <Table user={props.user} category='gasto' month={props.month}> </Table>
      <Table user={props.user} category='ganho' month={props.month}></Table>
      <Table user={props.user} category='investimento' month={props.month}></Table>
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