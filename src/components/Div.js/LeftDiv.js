import styled from "styled-components";
import TextContent from "../components/TextContent";
import StatementTable from "../Finance/StatementTable";
import DetailsTable from "../Finance/subcategoryTable";
import TableTasks from "../Tasks/TableTasks";

const LeftDivStyle = styled.div`
text-align: center;
width:30%;
margin:1%;
@media (min-width: 1920px) {
  width: 25%;
  max-width: 100%;
  font-size: 10px;
}
@media (max-width: 1440px) {
  width: 25%;
  max-width: 100%;
  font-size: 10px;
}
@media (max-width: 1280px) {
  width: 25%;
  max-width: 100%;
  
}
@media (max-width: 768px) {
  width: 95%;
  max-width: 100%;
  
}

`
const LeftDivFinance = (props) => {
  return (
    <LeftDivStyle>

      <TextContent content={'EXTRATO MENSAL'}></TextContent>
      <StatementTable content="SALDO: " category='total' month={props.month} user={props.user}></StatementTable>

      <TextContent content={'EXTRATO DE GASTOS'}></TextContent>
      <DetailsTable content="CONTAS MENSAIS: " category='negative' month={props.month} user={props.user} subcategory='monthExpense'></DetailsTable>
      <DetailsTable content="ESTUDOS: " category='negative' month={props.month} user={props.user} subcategory='estudy'></DetailsTable>
      <DetailsTable content="LAZER: " category='negative' month={props.month} user={props.user} subcategory='leisure'></DetailsTable>
      <StatementTable content="TOTAL: " category='negative' month={props.month} user={props.user}></StatementTable>

      <TextContent content={'EXTRATO DE GANHOS'}></TextContent>
      <StatementTable content="TOTAL: " category='positive' month={props.month} user={props.user}></StatementTable>


      <TextContent content={'EXTRATO DE INVESTIMENTOS'}></TextContent>
      <StatementTable content="INVESTIMENTOS MENSAIS: " category='investiment' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="TOTAL DE INVESTIMENTOS: " category='investiment' month='all' user={props.user}></StatementTable>


    </LeftDivStyle>
  )
};

const LeftDivTask = (props) => {
  return (
    <LeftDivStyle>
      <TableTasks user={props.user} status='to-do'></TableTasks>
    </LeftDivStyle>
  )
};
export { LeftDivFinance, LeftDivTask };