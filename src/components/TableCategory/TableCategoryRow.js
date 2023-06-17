import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Button from '../components/Button';


const RedCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(240, 0, 0, 0.107);
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

const GreenCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 240, 0, 0.107);
width:35%;
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
    width:30%;

}
`


const TableBodyRow = (props) => {
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


  const handleUpdatedItemChange = (event) => {
    const { name, value } = event.target;
    setUpdatedItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleUpdateItem = async () => {
    try {
      const response = await axios.post(`https://api-finances-will.onrender.com/${props.id}`, { item: updatedItem });
      window.location.reload();

    } catch (error) {
      console.error(error);
    }
  };

  if( props.category === 'gasto'){
    return (
        <div >
          <RedCellTextStyle  placeholder={props.name} name="nome"  value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem}/>
          <RedCellTextStyle  placeholder={props.value} name="valor"  value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <Button action='postRequest'  value='$' link={baseURLStatusChange + props.id}></Button>
          <Button action='deleteRequest' value="X" link={baseURLDelete + props.id}></Button>
        </div>

    )
  }else{
    return (
        <div>
          <GreenCellTextStyle  placeholder={props.name} name="nome"  value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <GreenCellTextStyle  placeholder={props.value} name="valor"  value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <Button action='postRequest'  value='$' link={baseURLStatusChange + props.id}></Button>
          <Button action='deleteRequest' value="X" link={baseURLDelete + props.id}></Button>
        </div>

    )
  }

    


  };
  

export default TableBodyRow;
