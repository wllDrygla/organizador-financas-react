import MonthStatementCategory from "./StatementTableCell"
import styled from "styled-components";
import TextContent from "../components/TextContent";
import DetailsTableCell from "./subcategoryTableCell";

const DivStyle = styled.div`
display: flex;
border-radius: 5px;
border:1px gray double;
justify-content: space-evenly;
background-color: white;
width: 100%;

`


const DetailsTable = (props) => {


    return (
        <DivStyle>
            <TextContent type='paragraph' content={props.content} ></TextContent>
            <DetailsTableCell
                category={props.category}
                month={props.month}
                user={props.user}
                subcategoria={props.subcategoria}
            ></DetailsTableCell>

        </DivStyle>
    )




};

export default DetailsTable;