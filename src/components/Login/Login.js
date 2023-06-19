import React, { useState, createContext } from "react";
import axios from "axios";
import styled from "styled-components";
import TextContent from "../components/TextContent";

export const UserContext = createContext();
const BodyStyle = styled.div`
background-color: rgba(200 , 200, 50, 0.050);
border-radius:5px;
text-align:center;
border:1px gray double;
margin:5%;
width: 90%;
`

const DivStyle = styled.div`
background-color: white;
margin:10%;
border: 2px gray double;
padding: 5%;
`

const InputStyle = styled.input`
margin:4px;
font-size:20px;
border-radius: 5px;
text-align: center;
padding:3px;
max-width: 250px;

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
  const [formData, setFormData] = useState({
    user: '',
    password: ''
  });
  const userLogged = sessionStorage.getItem("user");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post("https://api-finances-will.onrender.com/user/login", formData)
      .then((response) => {
        console.log(response.data.erro);
        if (response.data.user) {
          sessionStorage.setItem("user", response.data.user);
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
        <DivStyle>
          <form>
            <label>
              <TextContent type='title' content='SEJA BEM-VINDO ORGANIZADOR DE FINANÇAS DO WiLL'></TextContent>
              <TextContent content='USUÁRIO:'></TextContent>

              <InputStyle type="text" name="user" onChange={handleInputChange} />
            </label>
            <br />
            <label>
              <TextContent content='password:'></TextContent>
              <InputStyle type="password" name="password" onChange={handleInputChange} />
            </label>
            <br />
            <ButtonStyle type="submit" onClick={handleLogin}>ENTRAR</ButtonStyle>
          </form>
        </DivStyle>
        <DivStyle>

          <TextContent type='title' content="Se você quiser testar o site, pode usar nosso usuário de teste"></TextContent>

          <TextContent content="USUÁRIO: 'teste'"></TextContent>

          <TextContent content="password: '1234'"></TextContent>
        </DivStyle>
        <DivStyle>
          <TextContent type='title' content="EXEMPLO DO SITE: "></TextContent>

          <img src="exemplo.jpeg" width='90%'></img>

        </DivStyle>

      </BodyStyle>
    </UserContext.Provider>
  )
}


export default Login;