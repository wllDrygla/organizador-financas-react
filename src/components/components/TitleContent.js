import styled from "styled-components";

const TitleStyle = styled.h1`
margin:5%;
font-size: 50px;

@media (max-width: 768px){
  font-size: 40px;
}
`

const SubTïtleStyle = styled.h3`
margin:5%;
font-size:30px;

@media (max-width: 768px){
  font-size: 20px;
}
`

const TitleContent = (props) => {
  if(props.type === 'title'){
    return(
      <TitleStyle>{props.content}</TitleStyle>
    )
  }else{
    return(
      <SubTïtleStyle>{props.content}</SubTïtleStyle>
    )
  };  
};

export default TitleContent;