import styled from "styled-components";
import axios from "axios";
import React, { useState, createContext } from "react";
import CustomModal from "../Finance/Modal";

const ButtonStyle = styled.button`
font-size: 18px;
font-family: 'Gelasio';
border:1px black double;
padding:0 10px;
background-color:white;
width:51px;
height: 43px;


@media (max-width: 1920px) {
  font-size: 16px;
  height: 40px;


};
@media (max-width: 1680px) {
  font-size: 14px;
  height: 38px;

};
@media (max-width: 1440px) {
  font-size: 12px;
};

@media (max-width: 1280px) {
  font-size: 12px;
  width:41px;
  height:38px;
};
@media (max-width: 768px) {
  font-size: 10px;
  height: 37px;
  width:12%;


};
`

const ButtonStyleTwo = styled.button`
color:red;
padding:10px;
`

const Button = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", '');
    sessionStorage.setItem("userLogged", '');
    openModal();
  };

  const postRequest = async (event) => {
    event.preventDefault();
    const response = await axios.post(props.link);
    window.location.reload();
  };

  const deleteRequest = async (event) => {
    event.preventDefault();
    console.log(props.link)
    const response = await axios.delete(props.link);
    alert(`${response.data}`);
    window.location.reload();
  };

  const refreshWindow = () => {
    window.location.reload()
  };

  switch (props.action) {
    case 'handleLogout':
      return (
        <div>
        <ButtonStyle onClick={handleLogout}>{props.value}</ButtonStyle>
        <CustomModal type='logout' isOpen={isOpen} onClose={closeModal} />
        </div>
      );
    case 'postRequest':
      return (
        <ButtonStyle onClick={postRequest}>{props.value}</ButtonStyle>
      );
    case 'deleteRequest':
      return (
        <ButtonStyle onClick={deleteRequest}>{props.value}</ButtonStyle>
      );
    case 'refreshWindow':{
      return (
        <ButtonStyleTwo onClick={refreshWindow}>{props.value}</ButtonStyleTwo>
      );
    }
    default:
      console.log('botao invalido');
      break;
  };
};

export default Button;