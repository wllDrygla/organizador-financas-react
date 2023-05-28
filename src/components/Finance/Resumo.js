import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TableRow from "../TableCategory/TableCategoryRow";
import Total from "../components/Total";


const DivPaiStyle = styled.div`
text-align:center;
border: 2px black solid;
border-radius: 30px;
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

const InputStyle = styled.input`
margin:4px;
font-size:20px;
border-radius: 5px;
text-align: center;
padding:3px;
max-width: 250px;
font-weight:bolder;
border: 2px red solid;
background-color: white
@media (max-width: 768px){
  font-size: 13px;
  border: 2px blue solid;
  margin:5%;

}
`


const Resumo = (props) => {
  const [formData, setFormData] = useState({
    mes: 'Maio'
  });
  var usuario = props.user
  const baseURL = "https://api-will.herokuapp.com/api/financa/" + usuario
  const baseURLFinalizar = "https://api-will.herokuapp.com/api/finalizar/"

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
    <DivPaiStyle>

      {
        financa.map((item) => {
          if (formData.mes == item.mes && item.situacao == "pendente") {
            total_novo = item.valor;
            if (item.categoria == "gasto" || item.categoria == "investimento") {
              total = total_antigo - total_novo;
            } else { total = total_antigo + total_novo }
            total_antigo = total;

            return (

              <DivStyleDetalhes>

                <TableRow name={item.nome} value={item.valor} category={item.categoria} situacao={item.situacao}></TableRow>
                <form method="post" action={baseURLFinalizar + item._id}>
                  <InputStyle
                    type="submit"
                    value="FINALIZAR">
                  </InputStyle>
                </form>
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
