import styled from "styled-components";


export const TableStyle = styled.div`
border:1px gray double;
border-radius: 15px;
margin: 2em;

padding:30px;
background-color:white;
overflow-y: scroll;
max-height:500px;
width: fit-content;
max-width: 450px;
&::-webkit-scrollbar {
    width: 0.4rem; /* Adjust the width as needed */
    background-color: transparent;
  }
  
&::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
&::-webkit-scrollbar {
    width: 0.4rem; /* Adjust the width as needed */
    background-color: transparent;
  }
  
&::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

&:hover {
  transform: scale(1.10);
  box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.3);
}
`