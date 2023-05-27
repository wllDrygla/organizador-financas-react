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



function CadastroMeta(props) {
  const [formData, setFormData] = useState({
    meta: '',
    status: '',
    usuario:props.user
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = axios.post("https://api-will.herokuapp.com/api/metas/cadastro", formData)

    alert('CADASTRADO')
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
        <option value="PENDENTE">STATUS</option>
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