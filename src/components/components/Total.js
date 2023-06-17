import styled from "styled-components";


const DivStyle = styled.div`
text-align:center;
margin-left: 10px;
display: flex;
justify-content:space-evenly;
max-width: 90%;
`

const TextContentStyleTotal = styled.h2`
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
<TextContentStyleTotal>      </TextContentStyleTotal>
<TextContentStyleTotal>  TOTAL:   </TextContentStyleTotal>
<TextContentStyleTotal>     </TextContentStyleTotal>

<TextContentStyleTotal>R${props.total},00 </TextContentStyleTotal>
</DivStyle>
    )
}

export default Total;