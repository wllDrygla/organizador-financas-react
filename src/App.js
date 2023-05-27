import React, { useState, createContext } from "react";
import './App.css';
import Resumo from "./Resumo"
import CadastroFinanca from './components/CadastroFinanca';
import CadastroMeta from './components/CadastroMetas';
import styled from "styled-components";
import Login from "./Login";
import Table from "./components/Table";
import TableMetas from "./components/TableMetas";

const UserContext = createContext();
const mesAtual = 'Maio'
const BodyStyle = styled.div`
margin: 1%;
text-align:center;
max-width: 100%;
padding:0;

`
const DivStyle = styled.div`
background-color: rgba(0, 240, 228, 0.197);
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
const CenterDiv = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}
`
const LeftDiv = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

@media (max-width: 768px) {
  max-width: 100%;
  
}
`

const RightDiv = styled.div`
text-align: center;
max-width:35%;
margin:1% ;

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
          <TitleStyle>BEM-VINDO,  {userLogged}!</TitleStyle>

          <DivStyle>

            <LeftDiv>
              <TitleStyle>SISTEMA DE METAS ( em teste ):</TitleStyle>
              <TableMetas user={userLogged} status='PENDENTE'></TableMetas>
              <TableMetas user={userLogged} status='FAZENDO'></TableMetas>
              <TableMetas user={userLogged} status='FINALIZADO'></TableMetas>
            </LeftDiv>


            <CenterDiv>
              <TitleStyle>PENDÊNCIAS MENSAIS:</TitleStyle>
              <Resumo mes={mesAtual} user={userLogged} />
            </CenterDiv>


            <RightDiv>
              <TitleStyle>FINANÇAS MENSAIS:</TitleStyle>
              <Table user={userLogged} category='gasto'></Table>
              <Table user={userLogged} category='ganho'></Table>
              <Table user={userLogged} category='investimento'></Table>
            </RightDiv>


          </DivStyle>

          <CadastroFinanca user={userLogged} />
          <CadastroMeta user={userLogged}></CadastroMeta>
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
