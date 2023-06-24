import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const DivStyle = styled.div`
text-align:center;
border-radius: 30px;
border:1px gray double;
margin: 20px;
font-size: 15px;
background-color:white;

`
const FormStyle = styled.form`
margin:5px;
display:flex;
flex-direction:column;
padding:25px;
text-align:center

`
const LabelStyle = styled.label`
margin:10px;

`
const InputStyle = styled.input`
height:30px;
border-radius:10px;
margin:10px;
font-weight: bolder;
font-size: 15px;
text-align:center;
width: 80%;
border:1px gray double;

`
const SelectStyle = styled.select`
text-align:center;
border:1px gray double;

border-radius:10px;
height:30px;
font-weight: bolder;
font-size: 15px;
width: 50%;
`



function InsertFinance(props) {
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    month: '',
    category: '',
    situation: '',
    subcategory: '',
    period: '',
    startMonth: '',
    endMonth: '',
    user: props.user
  });

  const [isLoading, setIsLoading] = useState({
    loading: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await axios.post("https://api-finances-will.onrender.com/finance/insert", formData)
    alert(`${response.data} CADASTRADO COM SUCESSO`);
    window.location.reload();
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
        <h1>CADASTRO  DE  FINANÇAS</h1>
        <FormStyle onSubmit={handleSubmit}>
          <LabelStyle>
            <InputStyle placeholder='NOME' name="name" value={formData.name} onChange={handleInputChange} />
          </LabelStyle>
  
  
  
          <LabelStyle>
            <InputStyle placeholder="VALOR" name="value" value={formData.value} onChange={handleInputChange} />
          </LabelStyle>
  
  
  
          <LabelStyle>
            <SelectStyle name="category" value={formData.category} onChange={handleSelectChange}>
  
              <option value="">CATEGORIA</option>
              <option value="positive"> GANHO</option>
              <option value="negative">GASTO</option>
              <option value="investiment">INVESTIMENTO</option>
  
  
            </SelectStyle>
          </LabelStyle>
  
  
  
          <LabelStyle>
            {formData.category === 'negative' && (
  
              <SelectStyle name="subcategory" value={formData.subcategory} onChange={handleSelectChange}>
                <option value="">SUBCATEGORIA</option>
                <option value="monthExpense">CONTA MENSAL</option>
                <option value="leisure">LAZER</option>
                <option value="estudy">ESTUDOS</option>
              </SelectStyle>
            )}
          </LabelStyle>
  
          <LabelStyle>
            <SelectStyle name="situation" value={formData.situation} onChange={handleSelectChange}>
              <option value="">SITUAÇÃO</option>
              <option value="unpay"> A PAGAR / RECEBER</option>
              <option value="pay">PAGO</option>
            </SelectStyle>
          </LabelStyle>
  
          <LabelStyle>
            <SelectStyle name="period" value={formData.period} onChange={handleSelectChange}>
  
              <option value="">TIPO</option>
              <option value="only"> UNICO</option>
              <option value="periodical">PERIODICO</option>
              <option value="fixed">FIXO</option>
  
            </SelectStyle>
          </LabelStyle>
  
          <LabelStyle>
            {formData.period === "only" && (
              <SelectStyle name="month" value={formData.month} onChange={handleSelectChange}>
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
            {formData.period === "periodical" && (
              <SelectStyle name="startMonth" value={formData.startMonth} onChange={handleSelectChange}>
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
            {formData.period === "periodical" && (
              <SelectStyle name="endMonth" value={formData.endMonth} onChange={handleSelectChange}>
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
  
          {isLoading.loading === false && (
            <LabelStyle>
              <button type="submit">CADASTRAR</button>
            </LabelStyle>
          )}
  
        </FormStyle>
      </DivStyle>
    );
  }

  

export default InsertFinance;