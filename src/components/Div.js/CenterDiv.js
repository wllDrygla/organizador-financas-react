import styled from "styled-components";
import TextContent from "../components/TextContent";
import Resumo from "../Finance/Resume";
import TableTasks from "../Tasks/TableTasks";
import InsertFinance from "../Finance/InsertFinance";
import InsertTask from "../Tasks/InsertTask";

const CenterDivStyle = styled.div`
text-align: center;
width:30%;
margin:1% ;

@media (min-width: 1920px) {
  width: 35%;
  max-width: 100%;
}
@media (min-width: 1680px) {
  width: 35%;
  max-width: 100%;
}
  
@media (min-width: 1280px) {
  width: 40%;
  margin:0%
}
@media (max-width: 768px) {
  width: 100%;
  
}`

const CenterDivFinance = (props) => {
  return (
    <CenterDivStyle>
      <TextContent content={`PENDÊNCIAS MENSAIS:`}></TextContent>
      <Resumo month={props.month} user={props.user} />
      <InsertFinance user={props.user} />

    </CenterDivStyle>
  )
};

const CenterDivTask = (props) => {
  return (
    <CenterDivStyle>
      <TableTasks user={props.user} status='doing'></TableTasks>
      <InsertTask user={props.user}></InsertTask>
    </CenterDivStyle>
  )
};

export { CenterDivFinance, CenterDivTask };