import MonthStatementCategory from "./StatementTableCell"
import styled from "styled-components";
import ParagraphContent from "../components/Paragraph";
import DetailsTableCell from "./subcategoryTableCell";

const DivStyle = styled.div`
display: flex;
border-radius: 5px;
border: 2px black solid;
justify-content: space-evenly;
background-color: white;
width: 100%;

`


const DetailsTable = (props) => {


    return (
        <DivStyle>
            <ParagraphContent content={props.content} ></ParagraphContent>
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