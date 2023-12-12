import React, { useState } from 'react';
import axios from 'axios';

const Atualiza = (props) => {

  const item = useState({
    name: props.name,
    value:props.value,
    category: props.category,
    situation: props.situation
  });
  const [updatedItem, setUpdatedItem] = useState({
    name: '',
    value:'',
    category: '',
    situation: ''
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
      const response = await axios.post(`${baseUrl}/${props.id}`, { item: updatedItem });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input  placeholder={item[0].name} name="name" value={updatedItem.name} onChange={handleUpdatedItemChange} />
      <input placeholder={item[0].value} value={updatedItem.value} onChange={handleUpdatedItemChange} />
      <input placeholder={item[0].category} value={updatedItem.category} onChange={handleUpdatedItemChange} />

      <input placeholder={item[0].situation} value={updatedItem.situation} onChange={handleUpdatedItemChange} />
      <br />
      <button onClick={handleUpdateItem}>Update Item</button>
    </div>
  );
};

export default Atualiza;