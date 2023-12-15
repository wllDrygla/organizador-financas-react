import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TableBody from "../FinanceTable/TableBody";
import Total from "../components/Total";
import TableHeader from "../FinanceTable/TableHeader";
import { baseUrl } from "../../constants";
import { TableStyle } from "../components/Table";
import TextContent from "../components/TextContent";




const DivStyleDetalhes = styled.div`
`


const Resumo = (props) => {
  let user = props.user
  const baseURL = `${baseUrl}/finance/get-all/` + user


  const [finance, setFinanca] = React.useState([]);
  let listaFinancasResumo = []
  let total = 0
  let total_antigo = 0
  let total_novo = 0
  let contador = 0
  React.useEffect(() => {
    axios.get(baseURL).then(financesResult => {
      contador = contador + 1;
      if (contador <= 1) {
        for (let i = 0; i < financesResult.data.finance.length; i++) {
          listaFinancasResumo.push(financesResult.data.finance[i]);
          setFinanca(listaFinancasResumo)
        }
      }
    });
  }, []);

  if (!finance) return (<h1>Carregando....</h1>);

  return (
    <TableStyle>
            <TextContent content={props.content}></TextContent>

      <TableHeader name='NOME' value='VALOR' ></TableHeader>

      {
        finance.map((item) => {
          if (props.month == item.month && item.situation == "unpay") {
            total_novo = item.value;
            if (item.category == "negative" || item.category == "investiment") {
              total = total_antigo - total_novo;
            } else { total = total_antigo + total_novo }
            total_antigo = total;

            return (

              <DivStyleDetalhes>
                <TableBody name={item.name} value={item.value} category={item.category} situation={item.situation} id={item._id}></TableBody>
              </DivStyleDetalhes>
            )
          }
        }
        )}
      <Total total={total}></Total>
      

    </TableStyle>
  )
}


export default Resumo;
