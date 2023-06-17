import styled from "styled-components";
import axios from "axios";
import React, { useState, createContext } from "react";

const ButtonStyle = styled.button`
font-size: 18px;
font-family: 'Gelasio';
border:1px gray double;
padding:0 10px;
background-color:white;
border-radius: 5px;
padding:10px;
width:9%;
@media (max-width: 768px) {
  font-size: 10px;
}

`

const Button = (props) => {
  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", '');
    sessionStorage.setItem("userLogged", '');
    window.location.reload();
  };

  const postRequest = async (event) => {
    event.preventDefault();
    console.log('props.link', props.link)
    const response = await axios.post(props.link);
    alert(`${response.data}`);
    window.location.reload();
  };

  const deleteRequest = async (event) => {
    event.preventDefault();
    const response = await axios.delete(props.link);
    alert(`${response.data}`);
    window.location.reload();
  };

  switch (props.action) {
    case 'handleLogout':
      return (
        <ButtonStyle onClick={handleLogout}>{props.value}</ButtonStyle>
      );
    case 'postRequest':
      return (
        <ButtonStyle onClick={postRequest}>{props.value}</ButtonStyle>
      );
    case 'deleteRequest':
      return (
        <ButtonStyle onClick={deleteRequest}>{props.value}</ButtonStyle>
      );
    default:
      console.log('botao invalido');
      break;
  };
};

export default Button;