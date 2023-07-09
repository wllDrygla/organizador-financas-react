import React, { useState, createContext } from "react";
import styled from "styled-components";
import Login from "./components/Login/Login";
import TextContent from "./components/components/TextContent";
import Button from "./components/components/Button";
import { CenterDivFinance, CenterDivTask } from "./components/Div.js/CenterDiv";
import { LeftDivFinance,  LeftDivTask } from "./components/Div.js/LeftDiv";
import { RightDivFinance,  RightDivTask } from "./components/Div.js/RightDiv";

const UserContext = createContext();
const BodyStyle = styled.div`
font-family: 'Gelasio';
margin: 1%;
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
background-color: rgba(200 , 200, 50, 0.050);
border-radius:5px;
text-align:center;
border:1px gray double;
display: flex;
margin:0;
width: 100%;

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

  const [formData, setFormData] = useState({
    mesSelecionado: 'Julho'
  });
  const selectedMonth = formData.mesSelecionado

  const userLogged = sessionStorage.getItem("user");
  const isLoggedIn = sessionStorage.getItem("userLogged");
  return (

    <UserContext.Provider value={{ userLogged }}>
      {isLoggedIn == 'true' ? (
        <BodyStyle>
          <TextContent type='title' content={`BEM-VINDO, ${userLogged}`}></TextContent>

          <SelectStyle name="mesSelecionado" value={formData.mesSelecionado} onChange={handleSelectChange}>
            <OptionStyle value="Janeiro">01 - JANEIRO</OptionStyle>
            <OptionStyle value="Fevereiro">02 - FEVEREIRO</OptionStyle>
            <OptionStyle value="Março">03 - MARÇO</OptionStyle>
            <OptionStyle value="Abril">04 - ABRIL</OptionStyle>
            <OptionStyle value="Maio">05 - MAIO</OptionStyle>
            <OptionStyle value="Junho">06 - JUNHO</OptionStyle>
            <OptionStyle value="Julho">07 - JULHO</OptionStyle>
            <OptionStyle value="Agosto">08 - AGOSTO</OptionStyle>
            <OptionStyle value="Setembro">09 - SETEMBRO</OptionStyle>
            <OptionStyle value="Outubro">10 - OUTUBRO</OptionStyle>
            <OptionStyle value="Novembro">11 - NOVEMBRO</OptionStyle>
            <OptionStyle value="Dezembro">12 - DEZEMBRO</OptionStyle>
          </SelectStyle>

          <DivStyle>
            <LeftDivFinance user={userLogged} month={selectedMonth} ></LeftDivFinance>
            <CenterDivFinance user={userLogged} month={selectedMonth}></CenterDivFinance>
            <RightDivFinance user={userLogged} month={selectedMonth} ></RightDivFinance>
          </DivStyle>
          <TextContent type='title' content='SISTEMA DE TAREFAS'></TextContent>

          <DivStyle>
            <LeftDivTask user={userLogged} month={selectedMonth} ></LeftDivTask>
            <CenterDivTask user={userLogged} month={selectedMonth} ></CenterDivTask>
            <RightDivTask user={userLogged} month={selectedMonth} ></RightDivTask>
          </DivStyle>
          <Button value='SAIR' action='handleLogout'></Button>

        </BodyStyle>
      ) : (
        <Login>

        </Login>
      )}
    </UserContext.Provider>
  );
};




export default App;
