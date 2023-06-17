import styled from "styled-components";
import TextContent from "../components/TextContent";
import StatementTable from "../Finance/StatementTable";
import DetailsTable from "../Finance/subcategoryTable";
import TableMetas from "../Metas/TableMetas";

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
      <DetailsTable content="CONTAS MENSAIS: " category='gasto' month={props.month} user={props.user} subcategoria='conta-mensal'></DetailsTable>
      <DetailsTable content="ESTUDOS: " category='gasto' month={props.month} user={props.user} subcategoria='estudo'></DetailsTable>
      <DetailsTable content="LAZER: " category='gasto' month={props.month} user={props.user} subcategoria='lazer'></DetailsTable>
      <StatementTable content="TOTAL: " category='gasto' month={props.month} user={props.user}></StatementTable>

      <TextContent content={'EXTRATO DE GANHOS'}></TextContent>
      <StatementTable content="TOTAL: " category='ganho' month={props.month} user={props.user}></StatementTable>


      <TextContent content={'EXTRATO DE INVESTIMENTOS'}></TextContent>
      <StatementTable content="INVESTIMENTOS MENSAIS: " category='investimento' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="TOTAL DE INVESTIMENTOS: " category='investimento' month='todos' user={props.user}></StatementTable>


    </LeftDivStyle>
  )
};

const LeftDivTask = (props) => {
  return (
    <LeftDivStyle>
      <TableMetas user={props.user} status='PENDENTE'></TableMetas>
    </LeftDivStyle>
  )
};
export { LeftDivFinance, LeftDivTask };