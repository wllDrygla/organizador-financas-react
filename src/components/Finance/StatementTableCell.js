import React, { useState, useEffect } from "react";
import axios from "axios";
import TextContent from "../components/TextContent";

const MonthStatementCategory = (props) => {
  const baseURLcategory = `https://api-finances-will.onrender.com/finance/category-month-total/${props.category}/${props.month}/${props.user}`
  const baseURLtotal = `https://api-finances-will.onrender.com/finance/month-statement-total/${props.user}/${props.month}`
  const baseURLtotalInvestimento = `https://api-finances-will.onrender.com/finance/total-category/${props.user}/${props.category}`


  const [totalCategory, setTotalCategory] = React.useState('Carregando..');
  const [total, setTotal] = React.useState('Carregando..');
  const [totalInvestiment, setTotalInvestiment] = React.useState('Carregando..');


  React.useEffect(() => {
    axios.get(baseURLcategory).then(TotalResult => {
      setTotalCategory(TotalResult.data.Total)

    });
  }, [props.month]);

  React.useEffect(() => {
    axios.get(baseURLtotal).then(TotalResult => {
      setTotal(TotalResult.data.Total)


    });
  }, [props.month]);

  React.useEffect(() => {
    axios.get(baseURLtotalInvestimento).then(TotalResult => {
      setTotalInvestiment(TotalResult.data.Total)


    });
  }, [props.month]);

  if (props.category === 'total') {
      return (
        <TextContent type='paragraph' content={total} ></TextContent>
      )
    
  } 
  if (props.category === 'investiment' && props.month === 'all') {
    return (
      <TextContent type='paragraph' content={totalInvestiment} ></TextContent>
    )
  }
  else {
    return (
      <TextContent type='paragraph' content={totalCategory}></TextContent>
    )
  }





};

export default MonthStatementCategory