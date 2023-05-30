import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";


const RedCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(240, 0, 0, 0.107);
width:70%;
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
}
`
const RedCellValueStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(240, 0, 0, 0.107);
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
}
`

const GreenCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 240, 0, 0.107);
width:70%;
padding:10px;
text-align:center;
&::placeholder {
    color: black;
  };
border-radius:3px;
font-weight:bolder;
font-size: 20px;
border: 1px black solid;
@media (max-width: 768px){
    font-size: 13px;
}
`

const GreenCellValueStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 240, 0, 0.107);
width:15%;
padding:10px;
text-align:center;

&::placeholder {
    color: black;
  };
border-radius:3px;
font-weight:bolder;
font-size: 20px;
border: 1px black solid;
@media (max-width: 768px){
    font-size: 13px;
}
`

const TableCategoryRow = (props) => {

  const item = useState({
    name:props.name,
    value: props.value,
  });
  const [updatedItem, setUpdatedItem] = useState({
    nome: props.name,
    valor: props.value,
  });


  const handleUpdatedItemChange = (event) => {
    const { name, value } = event.target;
    setUpdatedItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleUpdateItem = async () => {
    try {
      const response = await axios.post(`https://api-will.herokuapp.com/${props.id}`, { item: updatedItem });
      window.location.reload();

    } catch (error) {
      console.error(error);
    }
  };

  if( props.category === 'gasto'){
    return (
        <div>
          <RedCellTextStyle  placeholder={props.name} name="nome"  value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem}/>
          <RedCellValueStyle  placeholder={props.value} name="valor"  value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
        </div>

    )
  }else{
    return (
        <div>
          <GreenCellTextStyle  placeholder={props.name} name="nome"  value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <GreenCellValueStyle  placeholder={props.value} name="valor"  value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
        </div>

    )
  }

    


  };
  

export default TableCategoryRow;
