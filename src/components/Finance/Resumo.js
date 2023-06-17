import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TableBody from "../FinanceTable/TableBody";
import Total from "../components/Total";
import TableHeader from "../FinanceTable/TableHeader";


const DivPaiStyle = styled.div`
text-align:center;
border:1px gray double;
border-radius: 5px;
margin:50px;
padding:30px;
background-color:white;
overflow-y: scroll;
height:500px;

@media (max-width: 768px) {
  margin: 5%;
  padding:5px;
}
`


const DivStyleDetalhes = styled.div`
`


const Resumo = (props) => {
  var usuario = props.user
  const baseURL = "https://api-finances-will.onrender.com/api/get-all-finances/" + usuario


  const [financa, setFinanca] = React.useState([]);
  var listaFinancasResumo = []
  var total = 0
  var total_antigo = 0
  var total_novo = 0
  var contador = 0
  React.useEffect(() => {
    axios.get(baseURL).then(financasResultado => {
      contador = contador + 1;
      if (contador <= 1) {
        for (let i = 0; i < financasResultado.data.financa.length; i++) {
          listaFinancasResumo.push(financasResultado.data.financa[i]);
          setFinanca(listaFinancasResumo)
        }
      }
    });
  }, []);

  if (!financa) return (<h1>Carregando....</h1>);

  return (
    <DivPaiStyle className="teste">
      <TableHeader name='NOME' value='VALOR' ></TableHeader>

      {
        financa.map((item) => {
          if (props.month == item.mes && item.situacao == "pendente") {
            total_novo = item.valor;
            if (item.categoria == "gasto" || item.categoria == "investimento") {
              total = total_antigo - total_novo;
            } else { total = total_antigo + total_novo }
            total_antigo = total;

            return (

              <DivStyleDetalhes>
                <TableBody name={item.nome} value={item.valor} category={item.categoria} situacao={item.situacao} id={item._id}></TableBody>
              </DivStyleDetalhes>
            )
          }
        }
        )}
      <Total total={total}></Total>
      

    </DivPaiStyle>
  )
}


export default Resumo;
