import TextContent from "../components/TextContent";
import StatementTable from "../Finance/StatementTable";
import DetailsTable from "../Finance/subcategoryTable";
import TableTasks from "../Tasks/TableTasks";
import { ContainerStyle } from "../components/Container.js";
import { TableStyle } from "../components/Table.js";

const LeftDivFinance = (props) => {
  return (
    <ContainerStyle>
<TableStyle>
      <TextContent content={'EXTRATO MENSAL'}></TextContent>
      <DetailsTable content="SALDO: " category='total' month={props.month} user={props.user}></DetailsTable>

      <DetailsTable content="CONTAS MENSAIS: " category='negative' month={props.month} user={props.user} subcategory='monthExpense'></DetailsTable>
      <DetailsTable content="ESTUDOS: " category='negative' month={props.month} user={props.user} subcategory='estudy'></DetailsTable>
      <DetailsTable content="LAZER: " category='negative' month={props.month} user={props.user} subcategory='leisure'></DetailsTable>



      <DetailsTable content="INVESTIMENTOS: " category='investiment' month='all' user={props.user}></DetailsTable>

      </TableStyle>
    </ContainerStyle>
  )
};

const LeftDivTask = (props) => {
  return (
    <ContainerStyle>
      <TableTasks user={props.user} status='to-do'></TableTasks>
    </ContainerStyle>
  )
};
export { LeftDivFinance, LeftDivTask };