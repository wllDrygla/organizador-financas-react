import styled from "styled-components";

const ParagraphContent = (props) => {
  const ParagraphStyle = styled.h1`
  width:100%;
  color:${props.color};
  text-align: center;
  
  @media (max-width: 768px ){
    font-size: 20px;
  }
  `
    return (
      <ParagraphStyle>{props.content}</ParagraphStyle>

    );
};

export default ParagraphContent;