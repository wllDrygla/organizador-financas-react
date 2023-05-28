import styled from "styled-components";
const baseURLFinalizar = "https://api-will.herokuapp.com/api/finalizar/"
const baseURLPendente = "https://api-will.herokuapp.com/api/pendente/"


const RedCellStyle = styled.p`
font-family: 'Gelasio';
background-color: rgba(240, 0, 0, 0.107);
width:700px;
border-radius:3px;
padding:10px;
font-weight:bolder;
font-size: 20px;
border: 1px black solid;

@media (max-width: 768px){
    font-size: 13px;
}
`

const GreenCellStyle = styled.p`
font-family: 'Gelasio';
background-color: rgba(0, 240, 0, 0.107);
width:700px;
border-radius:3px;
padding:10px;
font-weight:bolder;
font-size: 20px;
border: 1px black solid;
@media (max-width: 768px){
    font-size: 13px;
}
`


const TableCategoryCell = (props) => {
    if(props.category == 'gasto'){
        return (
            <RedCellStyle> {props.cell} </RedCellStyle>
    )
    }else{
        return (
            <GreenCellStyle> {props.cell} </GreenCellStyle>
    )
    }


};

export default TableCategoryCell;
