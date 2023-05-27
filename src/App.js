import React, { useState, createContext } from "react";
import './App.css';
import Resumo from "./Resumo"
import Cadastro from './Cadastro';
import styled from "styled-components";
import Login from "./Login";
import Table from "./components/Table";

const UserContext = createContext();
const mesAtual = 'Maio'
const BodyStyle = styled.div`
margin: 1%;
text-align:center;
max-width: 100%;

`
const DivStyle = styled.div`
background-color: rgba(0, 240, 228, 0.197);
border-radius:30px;
text-align:center;
border: 2px black solid;
display: flex;
margin:5%;

@media (max-width: 768px) {
  display: block;
  margin:3%;
}
`

const LeftDiv = styled.div`
text-align: center;
max-width:55%;

@media (max-width: 768px) {
  max-width: 100%;
  
}
`

const RightDiv = styled.div`
text-align: center;
max-width:45%;
@media (max-width: 768px) {
  max-width: 100%;
}
`

const TitleStyle = styled.h1`
margin:5%;

@media (max-width: 768px){
  font-size: 20px;
}
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
  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", '');
    sessionStorage.setItem("userLogged", '');
    window.location.reload();

  };

  const userLogged = sessionStorage.getItem("user");
  const isLoggedIn = sessionStorage.getItem("userLogged");

  return (
    <UserContext.Provider value={{ userLogged }}>
      {isLoggedIn == 'true' ? (
        <BodyStyle>
          <DivStyle>

            <LeftDiv>
              <TitleStyle>BEM-VINDO,  {userLogged}!</TitleStyle>
              <Resumo mes={mesAtual} user={userLogged} />
            </LeftDiv>

            <RightDiv>
            <Table user={userLogged} category='gasto'></Table>
            <Table user={userLogged} category='ganho'></Table>
            <Table user={userLogged} category='investimento'></Table>
            </RightDiv>

          </DivStyle>

          <Cadastro usuario={userLogged} />
          <ButtonStyle onClick={handleLogout}>SAIR</ButtonStyle>

        </BodyStyle>
      ) : (
       <Login>

       </Login>
      )}
    </UserContext.Provider>
  );
};




export default App;
