import styled from "styled-components";

const TitleStyle = styled.h1`
margin-left:5%;
margin-top:5%;
background-color: white;
width: fit-content;
align:center;
border-radius: 15px;
padding: 15px;
border:1px gray solid;


`

const ParagraphStyle = styled.p`
margin:5%;
`

const SubTïtleStyle = styled.h2`
margin:5%;


`

const TextContent = (props) => {
  if(props.type === 'title'){
    return(
      <TitleStyle>{props.content}</TitleStyle>
    )
  }if(props.type === 'paragraph'){
    return(
      <ParagraphStyle>{props.content}</ParagraphStyle>
    )
  }else{
    return(
      <SubTïtleStyle>{props.content}</SubTïtleStyle>
    )
  };  
};

export default TextContent;