import MonthStatement from "./Statement"
import styled from "styled-components";

const DivStyle = styled.div`
display: flex;
border-radius: 10px;
border: 2px black solid;
justify-content: space-evenly;
background-color: white;

`
const ParagraphStyle = styled.h1`
width:100%;
text-align: center;
@media (max-width: 768px ){
  font-size: 20px;
}
`

const StatementTable = (props) => {

    return (
        <DivStyle>
            <ParagraphStyle> {props.content} </ParagraphStyle>
            <MonthStatement
                category={props.category}
                month={props.month}
                user={props.user}
            ></MonthStatement>
        </DivStyle>
    )
};

export default StatementTable;