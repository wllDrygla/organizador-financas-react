import React, { useState, createContext} from "react";
import axios from "axios";
import styled from "styled-components";
import Resumo from "./Resumo"
import Cadastro from './Cadastro';
import DetalhesCategoria from './DetalhesCategoria';
import TotalCategoria from './TotalCategoria';



export const UserContext = createContext();





const Login = () => {
  const [setIsLoggedIn] = useState(null);
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
    


  return (
    <form>
    <label>
      <h1>Olá, seja bem vindo ao organizador de finanças do WiLL</h1>
      Username:
      <input type="text" name="usuario" onChange={handleInputChange} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" name="senha" onChange={handleInputChange} />
    </label>
    <br />
    <button type="submit" onClick={handleLogin}>Login</button>
  </form>
      )}
  

export default Login;