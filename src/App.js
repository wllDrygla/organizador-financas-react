import React, { useState, createContext} from "react";

import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import { UserContext } from './Login.js';
import Resumo from "./Resumo"
import Cadastro from './Cadastro';
import DetalhesCategoria from './DetalhesCategoria';
import TotalCategoria from './TotalCategoria';
const mesAtual = 'Março'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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
       < Login/>
       
       )}
        </UserContext.Provider>

      )}
  
  


export default App;
