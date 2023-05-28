import React, { useState, createContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Resumo from "../Finance/Resumo"
import Table from "../TableCategory/TableCategory";
import TableMetas from "../Metas/TableMetas";
import TitleContent from "../components/TitleContent";
import StatementTable from "../Finance/StatementTable";
import ParagraphContent from "../components/Paragraph";

export const UserContext = createContext();
const BodyStyle = styled.div`
margin: 1%;
text-align:center;
max-width: 100%;
padding:0;

`
const DivStyle = styled.div`
background-color: rgba(30, 30, 30, 0.050);
border-radius:30px;
text-align:center;
border: 2px black solid;
display: flex;
margin:0;
max-width: 100%;

@media (max-width: 768px) {
  display: block;
  margin:3%;
}
`
const CenterDivStyle = styled.div`
text-align: center;
max-width:900px;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}`
const LeftDivStyle = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}
`

const RightDivStyle = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
}
`
const InputStyle = styled.input`
margin:4px;
font-size:20px;
border-radius: 5px;
text-align: center;
padding:3px;
max-width: 250px;

`

const TitleStyle = styled.h1`
margin:5%;

@media (max-width: 768px){
  font-size: 20px;
}
`

const ParagraphStyle = styled.h2`
margin:4px;
`

const ButtonStyle = styled.button`
font-size: 35px;
font-family: 'Gelasio';
padding:0 10px;
background-color:white;
border-radius: 5px;
margin:5px;
`



const Login = () => {
  const mesAtual = 'Maio'
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  });
  const userLogged = sessionStorage.getItem("usuario");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post("https://api-will.herokuapp.com/api/login", formData)
      .then((response) => {
        console.log(response.data.usuarioLogado);
        if (response.data.usuarioLogado) {
          sessionStorage.setItem("user", response.data.usuarioLogado);
          sessionStorage.setItem("userLogged", 'true');
          window.location.reload();
        } else {
          alert('ERRO: ' + response.data.erro)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserContext.Provider value={{ userLogged }}>
      <BodyStyle>

        <form>
          <label>
            <TitleStyle>Olá, seja bem-vindo ao organizador de finanças do Will</TitleStyle>
            <ParagraphStyle>Usuário</ParagraphStyle>
            <InputStyle type="text" name="usuario" onChange={handleInputChange} />
          </label>
          <br />
          <label>
            <ParagraphStyle>Senha</ParagraphStyle>
            <InputStyle type="password" name="senha" onChange={handleInputChange} />
          </label>
          <br />
          <ButtonStyle type="submit" onClick={handleLogin}>ENTRAR</ButtonStyle>
        </form>
        <DivStyle>
          <ParagraphContent content="Se você quiser testar o site, pode usar nosso usuário de teste"></ParagraphContent>
        </DivStyle>
        <DivStyle>

          <ParagraphContent content="USUÁRIO: 'teste'"></ParagraphContent>
        </DivStyle>
        <DivStyle>

          <ParagraphContent content="SENHA: '1234'"></ParagraphContent>
        </DivStyle>


      </BodyStyle>
    </UserContext.Provider>
  )
}


export default Login;