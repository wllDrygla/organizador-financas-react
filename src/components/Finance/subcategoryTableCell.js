import React, { useState, useEffect } from "react";
import axios from "axios";
import TextContent from "../components/TextContent";

const DetailsTableCell = (props) => {
  const baseURLTotalSubcategory = `${baseUrl}/finance/subcategory-month-total/${props.category}/${props.month}/${props.user}/${props.subcategory}`


  const [totalSubCategory, setTotalSubCategory] = React.useState('Carregando..');

  React.useEffect(() => {
    axios.get(baseURLTotalSubcategory).then(TotalResult => {
        setTotalSubCategory(TotalResult.data.Total)

    });
  }, [props.month]);

  
    return (
      <TextContent type='paragraph' content={totalSubCategory}></TextContent>
    )

};

export default DetailsTableCell