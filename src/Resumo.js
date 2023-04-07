import React, { useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";



const DivStyle = styled.div`
text-align:center;
margin-left: 10px;
display: flex;
justify-content:space-evenly;
max-width: 1500px;
`
const DivStyleDetalhes = styled.div`
margin: 105px;
display: flex;
flex-direction:column;
align-items: stretch;

max-width: 500px
`


const ParagraphStyle = styled.p`
font-family: 'Gelasio';
width:500px;
padding:5px;
border-radius:3px;
margin-bottom:1px;
border:1px black double;

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
const FormStyle = styled.form`
margin:5px;
display:flex;
flex-direction:column;
padding:25px;
text-align:center

`


const  Resumo = (props) =>{
    const [formData, setFormData] = useState({
        mes:'Março'
      });
      const [idSelecionado, setIdSelecionado] = useState('')
      const [ idMenu, setMostraMenu] = useState("")
    var mes = props.mes
    var usuario = props.usuario
    console.log(usuario)



    const baseURL  = "https://dryglawill.win/api/financa/"+usuario
    const handleSubmit = (event, value) => {
      event.preventDefault();
      console.log(event)
      axios.put("https://dryglawill.win/api/finalizar/"+value)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const baseURLFinalizar  = "https://dryglawill.win/api/finalizar/"

    const [financa, setFinanca] = React.useState([]);
    var listaFinancasResumo = []
    var total = 0
    var total_antigo = 0
    var total_novo = 0
    var contador = 0
    React.useEffect(() => {
      axios.get(baseURL).then(financasResultado => {
          contador = contador +1;
          if(contador <= 1){
            for(let i = 0; i < financasResultado.data.financa.length; i++){

              listaFinancasResumo.push(financasResultado.data.financa[i]);
              setFinanca(listaFinancasResumo)

          }
          }
        
  });

}, []);

    if (!financa) return (<h1>Carregando....</h1>);
  
    return (
        <div>

        <h1>Pendências mensais:</h1>
        { 
                financa.map((item)=> {
                        if(formData.mes == item.mes && item.situacao == "pendente"){

                          
                          total_novo = item.valor;
                          if(item.categoria == "gasto"){total = total_antigo - total_novo;
                          }else{ total = total_antigo + total_novo}
                          total_antigo = total;
                            return(
                            
                                <DivStyle>
                                    <ParagraphStyle> {item.nome} </ParagraphStyle>
                                    <ParagraphStyle> {item.categoria} </ParagraphStyle>
                                    <ParagraphStyle> {item.valor} </ParagraphStyle>

                                    <form  method="post" action={baseURLFinalizar+item._id}>
                                          <input type="submit" value="OK"></input>
                                    </form>

  
                                </DivStyle>
                                )


                        }

                      }
                    
                   
                    
                
        )}  
        
        <DivStyle>
        <ParagraphStyleTotal>     </ParagraphStyleTotal>
        <ParagraphStyleTotal>     </ParagraphStyleTotal>

        <ParagraphStyleTotal>R${total},00 </ParagraphStyleTotal>
      </DivStyle>


        </div>
    )
            
}



export default Resumo;
