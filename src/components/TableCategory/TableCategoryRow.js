import styled from "styled-components";
import TableCategoryCell from "./TableCategoryCell";


const DivStyle = styled.div`
text-align:center;
display: flex;
justify-content:space-evenly;
border-radius: 30px;
margin-bottom:0px;
padding: 0;
`



const TableCategoryRow = (props) => {
    return (
        <DivStyle>
            <TableCategoryCell cell={props.name} category={props.category}> </TableCategoryCell>
            <TableCategoryCell cell={props.value} category={props.category}> </TableCategoryCell>
        </DivStyle>


    )



};

export default TableCategoryRow;
