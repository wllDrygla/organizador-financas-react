import React, { useState, createContext } from "react";
import axios from "axios";
import styled from "styled-components";
import TextContent from "../components/TextContent";
import CustomModal from "../Finance/Modal";

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
  const [isOpen, setIsOpen] = useState(false
    );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [isOpenLoading, setIsOpenLoading] = useState(false);

  const openModalLoading = () => {
    setIsOpenLoading(true);
  };

  const closeModalLoading = () => {
    setIsOpenLoading(false);
  };

  const [isOpeninitial, setIsOpenInitial] = useState(true);

  const closeModalInitial = () => {
    setIsOpenInitial(false);
  };

  const [isOpenError, setIsOpenError] = useState(false);

  const openModalError = () => {
    setIsOpenError(true);
  };

  const closeModalError = () => {
    setIsOpenError(false);
  };

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
    openModalLoading();
    axios.post("https://api-finances-will.onrender.com/user/login", formData)
      .then((response) => {
        console.log(response)
        if (response.data.user) {
          sessionStorage.setItem("user", response.data.user);
          sessionStorage.setItem("userLogged", 'true');
          closeModalLoading();
          openModal();
        } else {
          closeModalLoading();
          openModalError();
          console.error('ERRO: ' + response.data.erro)
        }
      })
      .catch((error) => {
        closeModalLoading();
        openModalError();
        console.error(error);
      });
  };
  

  return (
    <UserContext.Provider value={{ userLogged }}>
      <BodyStyle>
        <DivStyle>
        <CustomModal type='initial' isOpen={isOpeninitial} onClose={closeModalInitial} />

          <form>
            <label>
              <TextContent type='title' content='SEJA BEM-VINDO ORGANIZADOR DE FINANÇAS DO WiLL'></TextContent>
              <TextContent content='USUÁRIO:'></TextContent>

              <InputStyle type="text" name="user" onChange={handleInputChange} />
            </label>
            <br />
            <label>
              <TextContent content='SENHA:'></TextContent>
              <InputStyle type="password" name="password" onChange={handleInputChange} />
            </label>
            <br />
            <ButtonStyle type="submit" onClick={handleLogin}>ENTRAR</ButtonStyle>
          </form>
          <CustomModal type='loading' isOpen={isOpenLoading} onClose={closeModalLoading} />
          <CustomModal type='login' isOpen={isOpen} onClose={closeModal} />
          <CustomModal type='error' isOpen={isOpenError} onClose={closeModalError} />

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