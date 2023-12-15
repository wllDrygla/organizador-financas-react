import TextContent from "../components/TextContent";
import Table from "../FinanceTable/Table";
import TableTasks from "../Tasks/TableTasks";
import { ContainerStyle } from "../components/Container.js";

const RightDivFinance = (props) => {
  return (
    <ContainerStyle>
      <TextContent content={`FINANÇAS MENSAIS:`}></TextContent>
      <Table user={props.user} title='Gastos' category='negative' month={props.month}> </Table>
      <Table user={props.user} title='Ganhos' category='positive' month={props.month}></Table>
      <Table user={props.user} title='Investimentos'category='investiment' month={props.month}></Table>
    </ContainerStyle>
  )
};

const RightDivTask = (props) => {
  return (
    <ContainerStyle>
      <TableTasks user={props.user} status='done'></TableTasks>
    </ContainerStyle>
  )
}

export { RightDivFinance, RightDivTask };