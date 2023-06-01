import React, { useState, createContext } from "react";
import CadastroFinanca from './components/Finance/CadastroFinanca';
import CadastroMeta from './components/Metas/CadastroMetas';
import styled from "styled-components";
import Login from "./components/Login/Login";
import TitleContent from "./components/components/TitleContent";
import Button from "./components/components/Button";
import CenterDiv from "./components/Div.js/CenterDiv";
import LeftDiv from "./components/Div.js/LeftDiv";
import RightDiv from "./components/Div.js/RightDiv";

const UserContext = createContext();
const BodyStyle = styled.div`
margin: 1%;
text-align:center;
max-width: 100%;
padding:0;

`

const SelectStyle = styled.select`
text-align:center;
margin: 10px;
padding:10px;
border: 3px black solid;
border-radius:30px;
font-size:30px;
font-weight: bolder;
`

const OptionStyle = styled.option`
font-size:20px;
`
const DivStyle = styled.div`
background-color: rgba(0 , 100, 200, 0.20);
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
    mesSelecionado: 'Junho'
  });
  const selectedMonth = formData.mesSelecionado


  const userLogged = sessionStorage.getItem("user");
  const isLoggedIn = sessionStorage.getItem("userLogged");
  return (

    <UserContext.Provider value={{ userLogged }}>
      {isLoggedIn == 'true' ? (
        <BodyStyle>
          <TitleContent content={`BEM-VINDO, ${userLogged}`}></TitleContent>
          <SelectStyle name="mesSelecionado" value={formData.mesSelecionado} onChange={handleSelectChange}>
            <OptionStyle value='Março'>ESCOLHA O MÊS</OptionStyle>
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
            <LeftDiv user={userLogged}></LeftDiv>
            <CenterDiv user={userLogged} month={selectedMonth} ></CenterDiv>
            <RightDiv user={userLogged} month={selectedMonth}></RightDiv>
          </DivStyle>

          <CadastroFinanca user={userLogged} />
          <CadastroMeta user={userLogged}></CadastroMeta>
          <Button action='handleLogout'></Button>

        </BodyStyle>
      ) : (
        <Login>

        </Login>
      )}
    </UserContext.Provider>
  );
};




export default App;
