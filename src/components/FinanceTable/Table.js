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
  const [financa, setFinanca] = React.useState([]);

  const categoria = props.category
  const usuario = props.user
  const baseURL = "https://api-finances-will.onrender.com/api/get-all-finances/" + usuario
  let listaFinancas = [
  ]
  var contador = 0
  React.useEffect(() => {
    axios.get(baseURL).then(financasResultado => {
      contador = contador + 1;
      if (contador <= 1) {
        for (let i = 0; i < financasResultado.data.financa.length; i++) {
          listaFinancas.push(financasResultado.data.financa[i]);
          setFinanca(listaFinancas)
        }
      }
    });

  }, [props.month]);

  if (!financa) return (<h1>Carregando....</h1>);

  return (
    <DivPaiStyle className="teste"> 
      <TextContent content={`${categoria}s de ${props.month}`}></TextContent>
      <TableHeaderRow name='NOME' value='VALOR'></TableHeaderRow>


      {
        financa.map((item) => {

          if (item.categoria == categoria && item.situacao == "finalizado") {
            if (props.month == item.mes) {

              total_novo = item.valor;
              total = total_antigo + total_novo;
              total_antigo = total;

              return (
                <TableBody
                  name={item.nome}
                  value={item.valor}
                  category={item.categoria}
                  situacao={item.situacao}
                  id={item._id} className="teste">
                </TableBody>
              )


            }
          }
        })}
      {financa.map((item) => {
        if (item.categoria == categoria && item.situacao == "pendente") {
          if (props.month == item.mes) {
            total_novo = item.valor;
            total = total_antigo + total_novo;
            total_antigo = total;
            return (
              <TableBody
                name={item.nome}
                value={item.valor}
                category={item.categoria}
                situacao={item.situacao}
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
