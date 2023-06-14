import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import StatementTable from "../Finance/StatementTable";
import DetailsTable from "../Finance/subcategoryTable";

const LeftDivStyle = styled.div`
text-align: center;
width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}
`
const LeftDiv = (props) => {
    return (
        <LeftDivStyle>

      <TitleContent content={'EXTRATO MENSAL'}></TitleContent>
      <StatementTable content="SALDO: " category='total' month={props.month} user={props.user}></StatementTable>

      <TitleContent content={'EXTRATO DE GASTOS'}></TitleContent>
      <DetailsTable content="CONTAS MENSAIS: " category='gasto' month={props.month} user={props.user} subcategoria='conta-mensal'></DetailsTable>
      <DetailsTable content="ESTUDOS: " category='gasto' month={props.month} user={props.user} subcategoria='estudo'></DetailsTable>
      <DetailsTable content="LAZER: " category='gasto' month={props.month} user={props.user} subcategoria='lazer'></DetailsTable>
      <StatementTable content="TOTAL: " category='gasto' month={props.month} user={props.user}></StatementTable>

      <TitleContent content={'EXTRATO DE GANHOS'}></TitleContent>
      <StatementTable content="TOTAL: " category='ganho' month={props.month} user={props.user}></StatementTable>


      <TitleContent content={'EXTRATO DE INVESTIMENTOS'}></TitleContent>
      <StatementTable content="INVESTIMENTOS MENSAIS: " category='investimento' month={props.month} user={props.user}></StatementTable>
      <StatementTable content="TOTAL DE INVESTIMENTOS: " category='investimento' month='todos' user={props.user}></StatementTable>

      </LeftDivStyle>
    )
};

export default LeftDiv;