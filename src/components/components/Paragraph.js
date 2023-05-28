import styled from "styled-components";

const ParagraphStyle = styled.h1`
width:100%;
text-align: center;
@media (max-width: 768px ){
  font-size: 20px;
}
`
const RedParagraphStyle = styled.h1`
width:100%;
color:red;
text-align: center;
@media (max-width: 768px ){
  font-size: 20px;
}
`
const GreenParagraphStyle = styled.h1`
width:100%;
color:green;
text-align: center;
@media (max-width: 768px ){
  font-size: 20px;
}
`

const ParagraphContent = (props) => {

  if (props.color === 'red') {
    return (
      <RedParagraphStyle>{props.content}</RedParagraphStyle>

    );
  } if (props.color === 'green') {
    return (
      <GreenParagraphStyle>{props.content}</GreenParagraphStyle>

    );
  } else {
    return (
      <ParagraphStyle>{props.content}</ParagraphStyle>

    );
  };





};

export default ParagraphContent;