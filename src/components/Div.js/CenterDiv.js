import TextContent from "../components/TextContent";
import Resumo from "../Finance/Resume";
import TableTasks from "../Tasks/TableTasks";
import InsertFinance from "../Finance/InsertFinance";
import InsertTask from "../Tasks/InsertTask";
import { ContainerStyle } from "../components/Container.js";

const CenterDivFinance = (props) => {
  return (
    <ContainerStyle>
      <Resumo month={props.month} user={props.user}  content={"PENDÊNCIAS"}/>
      {/* <InsertFinance user={props.user} /> */}

    </ContainerStyle>
  )
};

const CenterDivTask = (props) => {
  return (
    <ContainerStyle>
      <TableTasks user={props.user} status='doing'></TableTasks>
      <InsertTask user={props.user}></InsertTask>
    </ContainerStyle>
  )
};

export { CenterDivFinance, CenterDivTask };