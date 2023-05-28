import styled from "styled-components";

const TitleStyle = styled.h1`
margin:5%;

@media (max-width: 768px){
  font-size: 20px;
}
`

const TitleContent = (props) => {
  return(
    <TitleStyle>{props.content}</TitleStyle>

  )

  
};

export default TitleContent;