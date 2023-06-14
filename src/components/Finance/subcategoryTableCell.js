import React, { useState, useEffect } from "react";
import axios from "axios";
import ParagraphContent from "../components/Paragraph";

const DetailsTableCell = (props) => {
  const baseURLTotalSubcategory = `https://api-finances-will.onrender.com/api/subcategory-month-total/${props.category}/${props.month}/${props.user}/${props.subcategoria}`


  const [totalSubCategory, setTotalSubCategory] = React.useState('Carregando..');

  React.useEffect(() => {
    axios.get(baseURLTotalSubcategory).then(TotalResult => {
        setTotalSubCategory(TotalResult.data.Total)

    });
  }, [props.month]);

  
    return (
      <ParagraphContent content={totalSubCategory}></ParagraphContent>
    )
  





};

export default DetailsTableCell