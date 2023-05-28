import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const ParagraphStyle = styled.h1`
width:100%;
text-align: center;
@media (max-width: 768px ){
  font-size: 20px;
}
`

const MonthStatement = (props) => {
    const baseURL = `https://api-will.herokuapp.com/api/total/${props.category}/${props.month}/${props.user}`
    const [total, setTotal] = React.useState(undefined);


    React.useEffect(() => {
        axios.get(baseURL).then(TotalResult => {
          setTotal(TotalResult.data.Total)
        });
      }, [props.month]);


      return(
        <ParagraphStyle>{total}</ParagraphStyle>
        )


};

export default MonthStatement