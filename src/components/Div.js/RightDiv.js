import styled from "styled-components";
import TextContent from "../components/TextContent";
import Table from "../FinanceTable/Table";
import TableTasks from "../Tasks/TableTasks";

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
      <TextContent content={`FINANÇAS MENSAIS:`}></TextContent>
      <Table user={props.user} category='negative' month={props.month}> </Table>
      <Table user={props.user} category='positive' month={props.month}></Table>
      <Table user={props.user} category='investiment' month={props.month}></Table>
    </RightDivStyle>
  )
};

const RightDivTask = (props) => {
  return (
    <RightDivStyle>
      <TableTasks user={props.user} status='done'></TableTasks>
    </RightDivStyle>
  )
}

export { RightDivFinance, RightDivTask };