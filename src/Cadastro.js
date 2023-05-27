import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const DivStyle = styled.div`
background-color: rgba(0, 240, 228, 0.297);
text-align:center;
border-radius: 30px;
border: 3px black solid;
`



const FormStyle = styled.form`
margin:5px;
display:flex;
flex-direction:column;
padding:25px;
text-align:center

`
const LabelStyle = styled.label`
margin:10px
`
const InputStyle = styled.input`
height:20px;
border-radius:10px;
margin:10px;
text-align:center
`
const SelectStyle = styled.select`
text-align:center;
border-radius:10px;
height:20px
`



function Cadastro(props) {
  const [formData, setFormData] = useState({
    nome: '',
    valor: '',
    mes: '',
    categoria:'',
    situacao: '',
    subcategoria:'',
    periodo:'',
    mesInicio:'',
    mesTermino:'',
    


    usuario:props.usuario
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
      console.log('testeHandleSubmit')
      const response = axios.post("https://api-will.herokuapp.com/api/cadastro", formData)
    
    alert('CADASTRADO')
    };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      
    }));

  };

  return (
    <DivStyle>
      <h1>CADASTRO FINANÇAS</h1>
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle>
        <InputStyle placeholder='NOME' name="nome" value={formData.nome} onChange={handleInputChange} />
      </LabelStyle>



      <LabelStyle>
        <InputStyle placeholder="VALOR" name="valor" value={formData.valor} onChange={handleInputChange} />
      </LabelStyle>



      <LabelStyle>
      <SelectStyle name="categoria" value={formData.categoria}  onChange={handleSelectChange}>
      
        <option value="">CATEGORIA</option>
        <option value="ganho"> GANHO</option>
        <option value="gasto">GASTO</option>
        <option value="investimento">INVESTIMENTO</option>

                
        </SelectStyle>
      </LabelStyle>



      <LabelStyle>
      {formData.categoria === 'gasto' && (
         
          <SelectStyle name="subcategoria" value={formData.subcategoria} onChange={handleSelectChange}>
            <option value="">SUBCATEGORIA</option>
            <option value="conta-mensal">CONTA MENSAL</option>
            <option value="lazer">LAZER</option>
            <option value="estudo">ESTUDOS</option>
          </SelectStyle>
      )}
      </LabelStyle>

      <LabelStyle>
      <SelectStyle name="periodo" value={formData.periodo}  onChange={handleSelectChange}>
      
        <option value="">TIPO</option>
        <option value="unico"> UNICO</option>
        <option value="periodico">PERIODICO</option>
        <option value="fixo">FIXO</option>
                
        </SelectStyle>
      </LabelStyle>


      
      <LabelStyle>
        {formData.periodo === "unico" &&(
      <SelectStyle name="mes" value={formData.mes} onChange={handleSelectChange}>
                            <option>ESCOLHA O MÊS</option>
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
      )}
      </LabelStyle>


      <LabelStyle>
        {formData.periodo === "periodico" &&(
          <SelectStyle name="mesInicio" value={formData.mesInicio} onChange={handleSelectChange}>
                                <option>ESCOLHA O MÊS DE INICIO</option>
                                <option value="1">01 - JANEIRO</option>
                                <option value="2">02 - FEVEREIRO</option>
                                <option value="3">03 - MARÇO</option>
                                <option value="4">04 - ABRIL</option>
                                <option value="5">05 - MAIO</option>
                                <option value="6">06 - JUNHO</option>
                                <option value="7">07 - JULHO</option>
                                <option value="8">08 - AGOSTO</option>
                                <option value="9">09 - SETEMBRO</option>
                                <option value="10">10 - OUTUBRO</option>
                                <option value="11">11 - NOVEMBRO</option>
                                <option value="12">12 - DEZEMBRO</option>
          </SelectStyle>  
        )}
      </LabelStyle>



      <LabelStyle>
        {formData.periodo === "periodico" &&(
          <SelectStyle name="mesTermino" value={formData.mesTermino} onChange={handleSelectChange}>
                                <option>ESCOLHA O MÊS DE TERMINO</option>
                                <option value="1">01 - JANEIRO</option>
                                <option value="2">02 - FEVEREIRO</option>
                                <option value="3">03 - MARÇO</option>
                                <option value="4">04 - ABRIL</option>
                                <option value="5">05 - MAIO</option>
                                <option value="6">06 - JUNHO</option>
                                <option value="7">07 - JULHO</option>
                                <option value="8">08 - AGOSTO</option>
                                <option value="9">09 - SETEMBRO</option>
                                <option value="10">10 - OUTUBRO</option>
                                <option value="11">11 - NOVEMBRO</option>
                                <option value="12">12 - DEZEMBRO</option>
          </SelectStyle>  
        )}
      </LabelStyle>



      <LabelStyle>
      <SelectStyle name="situacao" value={formData.situacao}  onChange={handleSelectChange}>
        <option value="">SITUAÇÃO</option>
        <option value="pendente"> PENDENTE</option>
        <option value="finalizado">FINALIZADO</option>
        </SelectStyle>
      </LabelStyle>



      <LabelStyle>
      <button type="submit">CADASTRAR</button>
      </LabelStyle>



    </FormStyle>
    </DivStyle>
  );
}

export default Cadastro;