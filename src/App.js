import React, { useState, createContext } from "react";
import styled from "styled-components";
import Login from "./components/Login/Login";
import TextContent from "./components/components/TextContent";
import Button from "./components/components/Button";
import { CenterDivFinance, CenterDivTask } from "./components/Div.js/CenterDiv";
import { LeftDivFinance,  LeftDivTask } from "./components/Div.js/LeftDiv";
import { RightDivFinance,  RightDivTask } from "./components/Div.js/RightDiv";
import { createGlobalStyle } from 'styled-components';
import { UserInfo } from "./components/Div.js/userInfo.js";
import Table from "./components/FinanceTable/Table.js";

const UserContext = createContext();
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #007FFF;
    margin: 0;
    padding: 0;
    border: 0;
    
    text-align:center;
  }
`;
const BodyStyle = styled.div`
font-family: 'Gelasio';
margin: 0%;
text-align:center;
max-width: 100%;
padding:0;
font-size:10px;
`

const SelectStyle = styled.select`
text-align:center;
margin: 10px;
padding:10px;
border:1px gray double;
border-radius:30px;
font-size: 20px;
font-weight: bolder;
`

const OptionStyle = styled.option`
font-size:20px;
`
const DivStyle = styled.div`
display: flex;
@media (max-width: 768px) {
  display: block;
  margin:0%;
}
`


function App() {
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,

    })
    );

  };

  var mesAtual = new Date().getMonth() + 1
  const [formData, setFormData] = useState({
    mesSelecionado: mesAtual
  });
  
  const months = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const selectedMonth = months[formData.mesSelecionado]

  const userLogged = sessionStorage.getItem("user");
  const isLoggedIn = sessionStorage.getItem("userLogged");
  return (
    <UserContext.Provider value={{ userLogged }}>
      {isLoggedIn == 'true' ? (
        <>
<GlobalStyle />
<BodyStyle>

<DivStyle>
<UserInfo user={userLogged} />


<CenterDivFinance user={userLogged} month={selectedMonth} />

<LeftDivFinance user={userLogged} month={selectedMonth} />

</DivStyle>


{/* 
          <SelectStyle name="mesSelecionado" value={formData.mesSelecionado} onChange={handleSelectChange}>
          <option value={0}>Janeiro</option>

            <OptionStyle value={1}>01 - JANEIRO</OptionStyle>
            <OptionStyle value={2}>02 - FEVEREIRO</OptionStyle>
            <OptionStyle value={3}>03 - MARÇO</OptionStyle>
            <OptionStyle value={4}>04 - ABRIL</OptionStyle>
            <OptionStyle value={5}>05 - MAIO</OptionStyle>
            <OptionStyle value={6}>06 - JUNHO</OptionStyle>
            <OptionStyle value={7}>07 - JULHO</OptionStyle>
            <OptionStyle value={8}>08 - AGOSTO</OptionStyle>
            <OptionStyle value={9}>09 - SETEMBRO</OptionStyle>
            <OptionStyle value={10}>10 - OUTUBRO</OptionStyle>
            <OptionStyle value={11}>11 - NOVEMBRO</OptionStyle>
            <OptionStyle value={12}>12 - DEZEMBRO</OptionStyle>
          </SelectStyle> */}

          <DivStyle>
          <Table user={userLogged} title='Gastos' category='negative' month={selectedMonth}> </Table>
      <Table user={userLogged} title='Ganhos' category='positive' month={selectedMonth}></Table>
      <Table user={userLogged} title='Investimentos'category='investiment' month={selectedMonth}></Table>          </DivStyle>
          <TextContent type='title' content='SISTEMA DE TAREFAS'></TextContent>

          <DivStyle>
            <LeftDivTask user={userLogged} month={selectedMonth} ></LeftDivTask>
            <CenterDivTask user={userLogged} month={selectedMonth} ></CenterDivTask>
            <RightDivTask user={userLogged} month={selectedMonth} ></RightDivTask>
          </DivStyle>
          <Button value='SAIR' action='handleLogout'></Button>

        </BodyStyle>
        </>
      ) : (
        <Login>

        </Login>
      )}
    </UserContext.Provider>
  );
};




export default App;
