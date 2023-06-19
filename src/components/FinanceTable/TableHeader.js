import React, { useState } from 'react';
import styled from "styled-components";


const CellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 0, 0, 0.017);
width:35%;
padding:10px;
text-align:center;
&::placeholder {
    color: black;
  };
font-weight:bolder;
font-size: 20px;
border: 1px black solid;
@media (max-width: 1920px){
  width:35%;
  font-size:17px;

};
@media (max-width: 1680px){
  width:30%;
};
@media (max-width: 1440px){
  font-size:13px;

};
@media (max-width: 1280px) {
  font-size: 12px;
}
@media (max-width: 768px){
  font-size: 13px;
  width:30%;
}
`
const TestCellTextStyle = styled.input`
font-family: 'Gelasio';
background-color: rgba(0, 0, 0, 0.017);
width: 80px;
padding:10px;
text-align:center;
&::placeholder {
    color: black;
  };
font-weight:bolder;
font-size: 20px;
border: 1px black solid;

@media (max-width: 1920px){
  font-size:17px;
  width:80px;
};

@media (max-width: 1440px){
  font-size:13px;
  width:80px;
};
@media (max-width: 1280px) {
  font-size: 12px;
  width:40px;

}
@media (max-width: 768px){
  font-size: 13px;
  width:17%;
}

`



const TableHeaderRow = (props) => {
     return (
        <div >
          <CellTextStyle  placeholder={props.name} name="name" />
          <CellTextStyle  placeholder={props.value} name="value"   />
          <TestCellTextStyle  placeholder="AÇÃO" name="actions"   />
        </div>
    )
  };
  

export default TableHeaderRow;
