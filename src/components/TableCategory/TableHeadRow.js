import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";


const CellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 0, 0, 0.017);
width:35%;
border-radius:3px;
padding:10px;
text-align:center;
&::placeholder {
    color: black;
  };
font-weight:bolder;
font-size: 20px;
border: 1px black solid;

@media (max-width: 768px){
    font-size: 13px;
    width:30%;
}
`
const TestCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 0, 0, 0.017);
width:15%;
border-radius:3px;
padding:10px;
text-align:center;
&::placeholder {
    color: black;
  };
font-weight:bolder;
font-size: 20px;
border: 1px black solid;

@media (max-width: 768px){
    font-size: 13px;
    width:12%;
}
`



const TableHeadRow = (props) => {
  const baseURLStatusChange = `https://api-finances-will.onrender.com/api/finance/${props.situacao}/`
  const baseURLDelete = "https://api-finances-will.onrender.com/finance/"
  const item = useState({
    name:props.name,
    value: props.value,
  });
  const [updatedItem, setUpdatedItem] = useState({
    nome: props.name,
    valor: props.value,
  });



    return (
        <div >
          <CellTextStyle  placeholder={props.name} name="nome" />
          <CellTextStyle  placeholder={props.value} name="valor"   />
          <TestCellTextStyle  placeholder="AÇÃO" name="actions"   />
        </div>

    )


    


  };
  

export default TableHeadRow;
