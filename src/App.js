import React, { useState, createContext} from "react";
import './App.css';
import Resumo from "./Resumo"
import Cadastro from './Cadastro';
import DetalhesCategoria from './DetalhesCategoria';
import axios from "axios";

const UserContext = createContext();
const mesAtual = 'Maio'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [formData, setFormData] = useState({
    usuario:'',
    senha:''

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
        if(response.data.usuarioLogado){
            setIsLoggedIn(true);
            sessionStorage.setItem("usuario", response.data.usuarioLogado);
            sessionStorage.setItem("Logado", 'logado');

        }else{
            alert('ERRO: '+response.data.erro)

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
{         estaLogado == 'logado' ? (
        <div>
          <p>BEM-VINDO, {usuarioLogadoTeste}!</p>
          <button onClick={handleLogout}>SAIR</button>
       <Resumo mes={mesAtual}  usuario={usuarioLogadoTeste}/>
       <DetalhesCategoria usuario={usuarioLogadoTeste} categoria="ganho"/>

       <DetalhesCategoria usuario={usuarioLogadoTeste} categoria="gasto"/>

       <DetalhesCategoria usuario={usuarioLogadoTeste} categoria="investimento"/>


       <Cadastro usuario={usuarioLogadoTeste} />

        </div>
      ) : (
        <UserContext.Provider value={{ usuarioLogadoTeste }}>
{    
        <form>
          <label>
            <h1>Ola {usuarioLogadoTeste}</h1>
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
        </form>}
        </UserContext.Provider>

       
       )}
        </UserContext.Provider>

      )}
  
  


export default App;
