import styled from "styled-components";
import TableCell from "./TableCell";
const baseURLFinalizar = "https://api-will.herokuapp.com/api/finalizar/"
const baseURLPendente = "https://api-will.herokuapp.com/api/pendente/"



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
            <TableCell cell={props.name} category={props.category}> </TableCell>
            <TableCell cell={props.value} category={props.category}> </TableCell>
            <TableCell cell={props.situacao} category={props.category}> </TableCell>
        </DivStyle>


    )



};

export default TableRow;
