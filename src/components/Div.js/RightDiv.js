import styled from "styled-components";
import TitleContent from "../components/TitleContent";
import Table from "../TableCategory/TableCategory";

const RightDivStyle = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
}
`

const RightDiv = (props) => {
    return(
        <RightDivStyle>
        <TitleContent content={`FINANÇAS MENSAIS:`}></TitleContent>

        <Table user={props.user} category='gasto' month={props.month}> </Table>
        <Table user={props.user} category='ganho' month={props.month}></Table>
        <Table user={props.user} category='investimento' month={props.month}></Table>
      </RightDivStyle>
    )
}

export default RightDiv