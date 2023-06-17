import MonthStatementCategory from "./StatementTableCell"
import styled from "styled-components";
import TextContent from "../components/TextContent";

const DivStyle = styled.div`
display: flex;
border-radius: 5px;
border:1px gray double;
justify-content: space-evenly;
background-color: white;
width: 100%;

`

const StatementTable = (props) => {
    return (
        <DivStyle>
            <TextContent content={props.content} type='paragraph'></TextContent>
            <MonthStatementCategory
                category={props.category}
                month={props.month}
                user={props.user}
            ></MonthStatementCategory>

        </DivStyle>
    )




};

export default StatementTable;