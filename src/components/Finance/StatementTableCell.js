import React, { useState, useEffect } from "react";
import axios from "axios";
import ParagraphContent from "../components/Paragraph";

const MonthStatementCategory = (props) => {
  const baseURLcategory = `https://api-will.herokuapp.com/api/total/${props.category}/${props.month}/${props.user}`
  const baseURLtotal = `https://api-will.herokuapp.com/api/total/${props.user}/${props.month}`
  const baseURLtotalInvestimento = `https://api-will.herokuapp.com/api/total-category/${props.user}/${props.category}`


  const [totalCategory, setTotalCategory] = React.useState(undefined);
  const [total, setTotal] = React.useState(undefined);
  const [totalInvestiment, setTotalInvestiment] = React.useState(undefined);


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
    if (total > 0) {
      return (
        <ParagraphContent content={total} color='green'></ParagraphContent>
      )
    } else {
      return (
        <ParagraphContent content={total} color='red'></ParagraphContent>
      )
    }

  } if (props.category === 'investimento' && props.month === 'todos') {
    return (
      <ParagraphContent content={totalInvestiment} color='green'></ParagraphContent>
    )
  }
  else {
    return (
      <ParagraphContent content={totalCategory}></ParagraphContent>
    )
  }





};

export default MonthStatementCategory