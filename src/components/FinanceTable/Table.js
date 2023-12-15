import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import Total from "../components/Total";
import TextContent from "../components/TextContent";
import TableBody from "./TableBody";
import TableHeaderRow from "./TableHeader";
import { baseUrl } from "../../constants";
import { TableStyle } from "../components/Table";


const TableCategory = (props) => {
  var total = 0
  var total_antigo = 0
  var total_novo = 0
  const [finance, setFinanca] = React.useState([]);

  const category = props.category
  const title = props.title
  const user = props.user
  const [renderiza, setRenderiza] = React.useState([]);
  const baseURL = `${baseUrl}/finance/get-all/` + user
  let listaFinancas = [
  ]
  var contador = 0
  React.useEffect(() => {
    axios.get(baseURL).then(financasResultado => {
      contador = contador + 1;
      if (contador <= 1) {
        for (let i = 0; i < financasResultado.data.finance.length; i++) {
          listaFinancas.push(financasResultado.data.finance[i]);
          setFinanca(listaFinancas)
        }
      }
    });

  }, [props.month, renderiza]);

  const refreshTable = (id) => {
    setRenderiza(id);
  };
  if (!finance) return (<h1>Carregando....</h1>);

  return (
    <TableStyle> 
      <TextContent content={`${title} de ${props.month}`}></TextContent>
      <TableHeaderRow name='NOME' value='VALOR'></TableHeaderRow>


      {
        finance.map((item) => {

          if (item.category == category && item.situation == "pay") {
            if (props.month == item.month) {

              total_novo = item.value;
              total = total_antigo + total_novo;
              total_antigo = total;

              return (
                <TableBody
                  name={item.name}
                  value={item.value}
                  category={item.category}
                  situation={item.situation}
                  id={item._id} className="teste"
                  refresh={refreshTable}>
                </TableBody>
              )


            }
          }
        })}
      {finance.map((item) => {
        if (item.category == category && item.situation == "unpay") {
          if (props.month == item.month) {
            total_novo = item.value;
            total = total_antigo + total_novo;
            total_antigo = total;
            return (
              <TableBody
                name={item.name}
                value={item.value}
                category={item.category}
                situation={item.situation}
                id={item._id}
                refresh={refreshTable}>
              </TableBody>
            )
          }
        }
      })}


      <Total total={total}></Total>





    </TableStyle>
  )

};



export default TableCategory;
