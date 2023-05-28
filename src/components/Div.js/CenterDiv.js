import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import Resumo from "../Finance/Resumo";
import StatementTable from "../Finance/StatementTable";

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

      <TitleContent content={'EXTRATO MENSAL'}></TitleContent>
      <StatementTable content="GANHOS: " category='ganho' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="GASTOS: " category='gasto' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="INVESTIMENTOS MENSAIS: " category='investimento' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="SALDO MENSAL: " category='total' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="TOTAL DE INVESTIMENTOS: " category='investimento' month='todos' user={props.user}></StatementTable>

      <TitleContent content={`PENDÊNCIAS MENSAIS:`}></TitleContent>
      <Resumo month={props.month} user={props.user} />
      
    </CenterDivStyle>
  )
};

export default CenterDiv;