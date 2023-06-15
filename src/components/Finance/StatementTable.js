import MonthStatementCategory from "./StatementTableCell"
import styled from "styled-components";
import ParagraphContent from "../components/Paragraph";

const DivStyle = styled.div`
display: flex;
border-radius: 5px;
border: 2px black solid;
justify-content: space-evenly;
background-color: white;
max-width: 100%;

`

const StatementTable = (props) => {
    return (
        <DivStyle>
            <ParagraphContent content={props.content} ></ParagraphContent>
            <MonthStatementCategory
                category={props.category}
                month={props.month}
                user={props.user}
            ></MonthStatementCategory>

        </DivStyle>
    )




};

export default StatementTable;