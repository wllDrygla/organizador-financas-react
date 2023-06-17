import styled from "styled-components";


const DivStyle = styled.div`
text-align:center;
margin-left: 10px;
display: flex;
justify-content:space-evenly;
max-width: 90%;
`

const ParagraphStyleTotal = styled.h2`
font-family: 'Gelasio';
width:500px;
padding:10px;
color:red;
font-size:40px;
@media (max-width: 1920px){
  font-size: 35px;
}
@media (max-width: 1680px){
  font-size: 30px;
}
@media (max-width: 768px){
  font-size: 18px;

}

`


const Total = (props) => {
    return (
        <DivStyle>
<ParagraphStyleTotal>      </ParagraphStyleTotal>
<ParagraphStyleTotal>  TOTAL:   </ParagraphStyleTotal>
<ParagraphStyleTotal>     </ParagraphStyleTotal>

<ParagraphStyleTotal>R${props.total},00 </ParagraphStyleTotal>
</DivStyle>
    )
}

export default Total;