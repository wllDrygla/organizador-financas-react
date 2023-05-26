
import React, { useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";



const DivStyle = styled.div`
text-align:center;
margin: 5px;
display: flex;
justify-content: space-around;
max-width: 500px


`
const ParagraphStyle = styled.p`
font-family: 'Gelasio';

`





const  TotalCategoria = (props) =>{
    var mes = props.mes
var usuario = props.usuario
var categoria = props.categoria
const baseURL  = "https://api-will.herokuapp.com/api/total/"+categoria+"/"+mes+"/"+usuario
    const [total, setTotal] = React.useState(null);
    var listaFinancas = []
    React.useEffect(() => {
        axios.get(baseURL).then(financasResultado => {

        setTotal(financasResultado.data.Total)
    })}, []);
  
    if (!total) return (<h1>Carregando....</h1>);
  
    return (
        <div>

        <h1> Total {categoria}s de {mes} {total}</h1>


        </div>
    )
            
}



export default TotalCategoria;
