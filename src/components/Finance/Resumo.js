import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TableRow from "../TableCategory/TableCategoryRow";
import Total from "../components/Total";
import Button from "../components/Button";


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
margin-bottom: 3%;
`


const Resumo = (props) => {
  var usuario = props.user
  const baseURL = "https://api-finances-will.onrender.com/api/get-all-finances/" + usuario
  const baseURLFinalizar = "https://api-finances-will.onrender.com/api/finance-pay/"
  const baseURLDelete = "https://api-finances-will.onrender.com/finance/"

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
                <TableRow name={item.nome} value={item.valor} category={item.categoria} situacao={item.situacao}></TableRow>
                <Button action='postRequest'  value='PAGAR' link={baseURLFinalizar + item._id}></Button>
                <Button action='deleteRequest' value="DELETAR" link={baseURLDelete + item._id}></Button>
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
