import React, { useState } from 'react';
import axios from 'axios';

const Atualiza = (props) => {

  const item = useState({
    nome: props.nome,
    valor:props.valor,
    categoria: props.categoria,
    situacao: props.situacao
  });
  const [updatedItem, setUpdatedItem] = useState({
    nome: '',
    valor:'',
    categoria: '',
    situacao: ''
  });


  const handleUpdatedItemChange = (event) => {
    const { name, value } = event.target;
    setUpdatedItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateItem = async () => {
    try {
      const response = await axios.post(`https://api-will.herokuapp.com/${props.id}`, { item: updatedItem });
      console.log(updatedItem);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input  placeholder={item[0].nome} nome="nome" value={updatedItem.nome} onChange={handleUpdatedItemChange} />
      <input placeholder={item[0].valor} value={updatedItem.valor} onChange={handleUpdatedItemChange} />
      <input placeholder={item[0].categoria} value={updatedItem.categoria} onChange={handleUpdatedItemChange} />

      <input placeholder={item[0].situacao} value={updatedItem.situacao} onChange={handleUpdatedItemChange} />
      <br />
      <button onClick={handleUpdateItem}>Update Item</button>
    </div>
  );
};

export default Atualiza;