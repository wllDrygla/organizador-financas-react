import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Button from '../components/Button';


const RedCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(240, 0, 0, 0.107);
width:35%;
padding:10px;
text-align:center;
&::placeholder {
    color: black;
  };
font-weight:bolder;
border: 1px black solid;
font-size:18px;

@media (max-width: 1920px){
  font-size:16px;
};
@media (max-width: 1680px){
  width:30%;
  font-size:14px;

};
@media (max-width: 768px){
    font-size: 13px;
};

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
font-weight:bolder;
font-size:18px;
border: 1px black solid;
@media (max-width: 1920px){
  font-size:16px;
};
@media (max-width: 1680px){
  width:30%;
  font-size:14px;

};
@media (max-width: 768px){
    font-size: 13px;
};




`
const TableBody = (props) => {
  const baseURLStatusChange = `https://api-finances-will.onrender.com/finance/${props.situation}/`
  const baseURLDelete = "https://api-finances-will.onrender.com/finance/"
  const item = useState({
    name: props.name,
    value: props.value,
  });
  const [updatedItem, setUpdatedItem] = useState({
    name: props.name,
    value: props.value,
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
      const response = await axios.post(`https://api-finances-will.onrender.com/finance/${props.id}`, { item: updatedItem });
      window.location.reload();

    } catch (error) {
      console.error(error);
    }
  };

  if (props.category === 'negative') {
    if (props.situation === 'unpay') {
      return (
        <div >
          <RedCellTextStyle placeholder={props.name} name="name" value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <RedCellTextStyle placeholder={props.value} name="value" value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <Button action='postRequest' value='>' link={baseURLStatusChange + props.id}></Button>
          <Button action='deleteRequest' value="X" link={baseURLDelete + props.id}></Button>
        </div>
      )
    } else {
      return (
        <div >
          <RedCellTextStyle placeholder={props.name} name="name" value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <RedCellTextStyle placeholder={props.value} name="value" value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <Button action='postRequest' value='<' link={baseURLStatusChange + props.id}></Button>
          <Button action='deleteRequest' value="X" link={baseURLDelete + props.id}></Button>
        </div>
      )
    }

  } else {
    if (props.situation === 'unpay') {
      return (
        <div >
          <GreenCellTextStyle placeholder={props.name} name="name" value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <GreenCellTextStyle placeholder={props.value} name="value" value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <Button action='postRequest' value='>' link={baseURLStatusChange + props.id}></Button>
          <Button action='deleteRequest' value="X" link={baseURLDelete + props.id}></Button>
        </div>
      )
    } else {
      return (
        <div >
          <GreenCellTextStyle placeholder={props.name} name="name" value={item.name} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <GreenCellTextStyle placeholder={props.value} name="value" value={item.value} onChange={handleUpdatedItemChange} onBlur={handleUpdateItem} />
          <Button action='postRequest' value='<' link={baseURLStatusChange + props.id}></Button>
          <Button action='deleteRequest' value="X" link={baseURLDelete + props.id}></Button>
        </div>
      )
    }
  }




};


export default TableBody;
