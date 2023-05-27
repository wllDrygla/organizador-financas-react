import styled from "styled-components";
import TableRow from "./TableRow";
import React, { useState } from "react";
import axios from "axios";

const DivStyle = styled.div`
text-align:center;
display: flex;
justify-content:space-evenly;
max-width: 90%;
`

const ParagraphStyle = styled.p`
font-family: 'Gelasio';
width:500px;
padding:5px;
border-radius:3px;
margin-bottom:1px;
border:1px black double;

`
const DivPaiStyle = styled.div`
text-align:center;
border: 2px black solid;
border-radius: 20px;
margin:0px;
padding:30px;
background-color:white;
margin:1%;
@media (max-width: 768px) {
  margin: 5%;
}

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


const Table = (props) => {
    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
    
        }))      ;
    
      };
      var total = 0
      var total_antigo = 0
      var total_novo = 0
    const [financa, setFinanca] = React.useState([]);
    const [formData, setFormData] = useState({
        mesSelecionado: 'Maio'
      });
    const categoria = props.category
    const usuario = props.user
    const baseURL = "https://api-will.herokuapp.com/api/financa/" + usuario
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
                    <TableRow
                      name={item.nome}
                      value={item.valor}
                      category={item.categoria}
                      situacao={item.situacao}
                      itemId={item._id}>
                    </TableRow>
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
                    <TableRow
                      name={item.nome}
                      value={item.valor}
                      category={item.categoria}
                      situacao={item.situacao}
                      itemId={item._id}>
                    </TableRow>
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



    // return (
    //     <div>
    //         <TableRow
    //             name={props.name}
    //             value={props.value}
    //             situacao={props.situacao}
    //             category={props.category}

    //             itemId={props._id}>

    //         </TableRow>
    //     </div>
    // )
};



export default Table;
