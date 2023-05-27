import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Table from "./components/Table";

const DivPaiStyle = styled.div`
text-align:center;
border: 2px black solid;
border-radius: 30px;
margin:0px;
padding:30px;
background-color:white;
margin:50px;
`

const DivStyle = styled.div`
text-align:center;
display: flex;
justify-content:space-evenly;
`

const ParagraphStyleTotal = styled.h2`
font-family: 'Gelasio';
width:500px;
padding:10px;
color:red;
`

const LabelStyle = styled.label`
margin:10px
`

const SelectStyle = styled.select`
text-align:center;
border-radius:10px;
height:20px`


const DetalhesCategoria = (props) => {
  const [financa, setFinanca] = React.useState([]);

  const [formData, setFormData] = useState({
    mesSelecionado: 'Maio'
  });
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,

    }))
    console.log(formData.mesSelecionado)
    console.log("lista", listaFinancas.length, "Finança", financa.length)

      ;

  };

  var categoria = props.categoria
  var usuario = props.usuario
  const baseURL = "https://api-will.herokuapp.com/api/financa/" + usuario
  const baseURLFinalizar = "https://api-will.herokuapp.com/api/finalizar/"
  const baseURLPendente = "https://api-will.herokuapp.com/api/pendente/"

  var total = 0
  var total_antigo = 0
  var total_novo = 0
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

  }, []);
  if (!financa) return (<h1>Carregando....</h1>);

  return (
    <DivPaiStyle>

      <h1>{categoria}s de {formData.mesSelecionado}</h1>
      <LabelStyle>
        <SelectStyle name="mesSelecionado" value={formData.mesSelecionado} onChange={handleSelectChange}>
          <option value='Março'>ESCOLHA O MÊS</option>
          <option value="Janeiro">01 - JANEIRO</option>
          <option value="Fevereiro">02 - FEVEREIRO</option>
          <option value="Março">03 - MARÇO</option>
          <option value="Abril">04 - ABRIL</option>
          <option value="Maio">05 - MAIO</option>
          <option value="Junho">06 - JUNHO</option>
          <option value="Julho">07 - JULHO</option>
          <option value="Agosto">08 - AGOSTO</option>
          <option value="Setembro">09 - SETEMBRO</option>
          <option value="Outubro">10 - OUTUBRO</option>
          <option value="Novembro">11 - NOVEMBRO</option>
          <option value="Dezembro">12 - DEZEMBRO</option>
        </SelectStyle>

      </LabelStyle>


      {

        financa.map((item) => {

          if (item.categoria == categoria && item.situacao == "finalizado") {
            if (formData.mesSelecionado == item.mes) {

              total_novo = item.valor;
              total = total_antigo + total_novo;
              total_antigo = total;

              return (
                <Table
                  name={item.nome}
                  value={item.valor}
                  category={item.categoria}
                  situacao={item.situacao}
                  itemId={item._id}>
                </Table>
              )


            }
          }
        })}
      {financa.map((item) => {
          if (item.categoria == categoria && item.situacao == "pendente") {
            if (formData.mesSelecionado == item.mes) {
              total_novo = item.valor;
              total = total_antigo + total_novo;
              total_antigo = total;
              return (
                <Table
                  name={item.nome}
                  value={item.valor}
                  category={item.categoria}
                  situacao={item.situacao}
                  itemId={item._id}>
                </Table>
              )
            }
          }
        })}


      <DivStyle>
        <ParagraphStyleTotal>   TOTAL:  </ParagraphStyleTotal>
        <ParagraphStyleTotal>R${total},00 </ParagraphStyleTotal>
      </DivStyle>




    </DivPaiStyle>
  )

}



export default DetalhesCategoria;
