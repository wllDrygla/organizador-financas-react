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
border:1px gray double;
border-radius:10px;
margin:10px;
font-weight: bolder;
font-size: 15px;
text-align:center;
width: 80%;
`
const SelectStyle = styled.select`
text-align:center;
border-radius:10px;
border:1px gray double;
height:30px;
font-weight: bolder;
font-size: 15px;
width: 50%;
`



function CadastroMeta(props) {
  const [formData, setFormData] = useState({
    meta: '',
    status: '',
    usuario:props.user
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await axios.post("https://api-finances-will.onrender.com/api/metas/cadastro", formData)
    alert(`${response.data} CADASTRADO COM SUCESSO`)
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
      <h1>CADASTRO  DE  METAS</h1>
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle>
        <InputStyle placeholder='NOME' name="meta" value={formData.meta} onChange={handleInputChange} />
      </LabelStyle>

      <LabelStyle>
      <SelectStyle name="status" value={formData.status}  onChange={handleSelectChange}>
        <option value="">STATUS</option>
        <option value="PENDENTE"> A FAZER</option>
        <option value="FAZENDO"> FAZENDO</option>
        <option value="FINALIZADO">PRONTA</option>
        </SelectStyle>
      </LabelStyle>

      <LabelStyle>
      <button type="submit">CADASTRAR</button>
      </LabelStyle>



    </FormStyle>
    </DivStyle>
  );
}

export default CadastroMeta;