import styled from "styled-components";
import TableCellCategory from "./TableCellCategory";


const DivStyle = styled.div`
text-align:center;
display: flex;
justify-content:space-evenly;
border-radius: 30px;
margin-bottom:0px;
padding: 0;
`



const TableRow = (props) => {
    return (
        <DivStyle>
            <TableCellCategory cell={props.name} category={props.category}> </TableCellCategory>
            <TableCellCategory cell={props.value} category={props.category}> </TableCellCategory>
        </DivStyle>


    )



};

export default TableRow;
