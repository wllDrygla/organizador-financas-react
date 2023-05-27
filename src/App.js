import React, { useState, createContext } from "react";
import './App.css';
import Resumo from "./Resumo"
import Cadastro from './Cadastro';
import DetalhesCategoria from './DetalhesCategoria';
import axios from "axios";
import styled from "styled-components";

const UserContext = createContext();
const mesAtual = 'Maio'
const BodyStyle = styled.div`
margin: 1%;
text-align:center;

`
const DivStyle = styled.div`
background-color: rgba(0, 240, 228, 0.197);
border-radius:30px;
text-align:center;
border: 2px black solid;
display: flex;
margin:1%;
`

const LeftDiv = styled.div`
text-align: center;
max-width:55%;
`

const RightDiv = styled.div`
text-align: center;
max-width:45%;
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




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''

  });

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
          setIsLoggedIn(true);
          sessionStorage.setItem("usuario", response.data.usuarioLogado);
          sessionStorage.setItem("Logado", 'logado');

        } else {
          alert('ERRO: ' + response.data.erro)

        }


      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    sessionStorage.setItem("usuario", '');
    sessionStorage.setItem("Logado", '');
  }
  var usuarioLogadoTeste = sessionStorage.getItem("usuario")
  var estaLogado = sessionStorage.getItem("Logado");
  return (
    <UserContext.Provider value={{ usuarioLogadoTeste }}>
      {estaLogado == 'logado' ? (
        <BodyStyle>
          <DivStyle>
            <LeftDiv>
              <TitleStyle>BEM-VINDO,  {usuarioLogadoTeste}!</TitleStyle>
              <Resumo mes={mesAtual} usuario={usuarioLogadoTeste} />

            </LeftDiv>

            <RightDiv>
              <DetalhesCategoria usuario={usuarioLogadoTeste} categoria="ganho" />

              <DetalhesCategoria usuario={usuarioLogadoTeste} categoria="gasto" />

              <DetalhesCategoria usuario={usuarioLogadoTeste} categoria="investimento" />
            </RightDiv>





          </DivStyle>
          <Cadastro usuario={usuarioLogadoTeste} />
          <ButtonStyle onClick={handleLogout}>SAIR</ButtonStyle>
        </BodyStyle>

      ) : (
        <UserContext.Provider value={{ usuarioLogadoTeste }}>
          <BodyStyle>
            <DivStyle>

              {

                <LeftDiv>
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
                  <TitleStyle>Aqui temos uma exemplo de funcionamento do site:</TitleStyle>
                  <Resumo mes={mesAtual} usuario={'teste'} />
                </LeftDiv>


              }
              <RightDiv>

                <DetalhesCategoria usuario={'teste'} categoria="ganho" />

                <DetalhesCategoria usuario={'teste'} categoria="gasto" />

                <DetalhesCategoria usuario={'teste'} categoria="investimento" />
              </RightDiv>
            </DivStyle>

          </BodyStyle>


        </UserContext.Provider>
      )}

    </UserContext.Provider>

  )
}




export default App;
