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



function InsertTask(props) {
  const [formData, setFormData] = useState({
    task: '',
    status: '',
    user:props.user
  });
  const handleSubmit = async (event) => {
    console.log(formData)
    event.preventDefault();
      const response = await axios.post("${baseUrl}/task/insert", formData)
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
      <h1>CADASTRO  DE  TAREFAS</h1>
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle>
        <InputStyle placeholder='NOME' name="task" value={formData.task} onChange={handleInputChange} />
      </LabelStyle>

      <LabelStyle>
      <SelectStyle name="status" value={formData.status}  onChange={handleSelectChange}>
        <option value="">STATUS</option>
        <option value="to-do"> TO DO</option>
        <option value="doing"> DOING</option>
        <option value="done">DONE</option>
        </SelectStyle>
      </LabelStyle>

      <LabelStyle>
      <button type="submit">CADASTRAR</button>
      </LabelStyle>



    </FormStyle>
    </DivStyle>
  );
}

export default InsertTask;