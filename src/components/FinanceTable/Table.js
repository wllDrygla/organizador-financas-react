import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import Total from "../components/Total";
import TextContent from "../components/TextContent";
import TableBody from "./TableBody";
import TableHeaderRow from "./TableHeader";


const DivPaiStyle = styled.div`
text-align:center;
border:1px gray double;
border-radius: 5px;
margin:0px;
padding:30px;
background-color:white;
margin:1%;
height: 400px;
overflow-y: scroll;
@media (max-width: 768px) {
  margin: 5%;
}

`

const TableCategory = (props) => {
  var total = 0
  var total_antigo = 0
  var total_novo = 0
  const [finance, setFinanca] = React.useState([]);

  const category = props.category
  const user = props.user
  const baseURL = "https://api-finances-will.onrender.com/finance/get-all/" + user
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

  }, [props.month]);

  if (!finance) return (<h1>Carregando....</h1>);

  return (
    <DivPaiStyle className="teste"> 
      <TextContent content={`${category}s de ${props.month}`}></TextContent>
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
                  id={item._id} className="teste">
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
                id={item._id}>
              </TableBody>
            )
          }
        }
      })}


      <Total total={total}></Total>





    </DivPaiStyle>
  )

};



export default TableCategory;