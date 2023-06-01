import styled from "styled-components";
import axios from "axios";
import React, { useState, createContext } from "react";

const ButtonStyle = styled.button`
font-size: 35px;
font-family: 'Gelasio';
padding:0 10px;
background-color:white;
border-radius: 5px;
margin:5px;
`

const Button = (props) => {
    const handleLogout = (event) => {
        event.preventDefault();
        sessionStorage.setItem("user", '');
        sessionStorage.setItem("userLogged", '');
        window.location.reload();
    
      };

      const pay = async (event) => {
        event.preventDefault();
          const response = axios.post(props.link)
          window.location.reload();
      };

      if(props.action === 'handleLogout'){
        return(
            <ButtonStyle onClick={handleLogout}>SAIR</ButtonStyle>
        )
      }
      if(props.action === 'pay'){
        return(
            <ButtonStyle onClick={pay}>PAGO</ButtonStyle>
        )
      }



};

export default Button;