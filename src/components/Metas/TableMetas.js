import styled from "styled-components";
import TableRow from "../TableCategory/TableCategoryRow";
import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const DivStyle = styled.div`
text-align:center;
display: block;
justify-content:space-evenly;
max-width: 100%;

`
const ParagraphTitleStyle = styled.h1`
font-family: 'Gelasio';
font-size:35px;
font-weight: bolder;
width:90%;
padding:15px;
margin-left:5%;
margin-bottom:1px;

@media ( max-width: 768px ){
    font-size:23px;
}
`

const ParagraphRedStyle = styled.p`
font-family: 'Gelasio';
width:700px;

font-size:25px;
font-weight: bolder;
width:90%;
padding:15px;
border-radius:5px;
margin-left:5%;
margin-bottom:1px;
border:1px gray double;
background-color: rgba(255, 0, 50, 0.200);

@media ( max-width: 768px ){
    font-size:18px;
}
`

const ParagraphBlueStyle = styled.p`
font-family: 'Gelasio';
width:700px;
font-size:25px;
font-weight: bolder;
width:90%;
padding:15px;
border-radius:5px;
margin-left:5%;
margin-bottom:1px;
border:1px gray double;
background-color: rgba(0, 200, 255, 0.200);

@media ( max-width: 768px ){
    font-size:18px;
}
`

const ParagraphGreenStyle = styled.p`
font-family: 'Gelasio';
width:700px;
font-size:25px;
font-weight: bolder;
width:90%;
padding:15px;
border-radius:5px;
margin-left:5%;
margin-bottom:1px;
border:1px gray double;
background-color: rgba(0, 255, 100, 0.300);
@media ( max-width: 768px ){
    font-size:18px;
}
`
const NewDivStyle = styled.div`
text-align:center;
border:1px gray double;
border-radius: 5px;
margin:0px;
padding:30px;
background-color:white;
overflow-y: scroll;
overflow-x: hidden;
height: 600px;
margin:1%;
@media (max-width: 768px) {
  margin: 5%;
}
`

const TableMetas = (props) => {
    const [meta, setMeta] = React.useState([]);
    const baseURLFinalizar = "https://api-finances-will.onrender.com/api/metas/finalizar/"
    const baseURLPendente = "https://api-finances-will.onrender.com/api/metas/pendente/"
    const baseURLFazendo = "https://api-finances-will.onrender.com/api/metas/fazendo/"
    const baseURLDelete = "https://api-finances-will.onrender.com/task/"

    const [formData, setFormData] = useState({
    });
    const status = props.status
    const usuario = props.user
    const baseURL = "https://api-finances-will.onrender.com/api/metas/" + usuario
    var listaMetas = [
    ]
    var contador = 0
    React.useEffect(() => {
        axios.get(baseURL).then(metasResultado => {
            contador = contador + 1;
            if (contador <= 1) {
                for (let i = 0; i < metasResultado.data.metas.length; i++) {
                    listaMetas.push(metasResultado.data.metas[i]);
                    setMeta(listaMetas)
                }
            }

        });

    }, []);

    if (!meta) return (<h1>Carregando....</h1>);

    if (props.status === 'PENDENTE') {
        return (
            <NewDivStyle className="teste">
                <ParagraphTitleStyle>{status}</ParagraphTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <ParagraphRedStyle> {item.name} </ParagraphRedStyle>

                                    <Button action='postRequest' value=">" link={baseURLFazendo + item._id}></Button>

                                    <Button action='postRequest' value=">>" link={baseURLFinalizar + item._id}></Button>
                                    
                                    <Button action='deleteRequest' value="X" link={baseURLDelete + item._id}></Button>
                                </DivStyle>
                            )
                        }
                    }
                    )}
            </NewDivStyle>
        )
    };
    if (props.status === 'FAZENDO') {
        return (
            <NewDivStyle className="teste">
                <ParagraphTitleStyle>{status}</ParagraphTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <ParagraphBlueStyle> {item.name} </ParagraphBlueStyle>

                                    <Button action='postRequest' value="<" link={baseURLPendente + item._id}></Button>

                                    <Button action='postRequest' value=">" link={baseURLFinalizar + item._id}></Button>

                                    <Button action='deleteRequest' value="X" link={baseURLDelete + item._id}></Button>
                                </DivStyle>
                            )
                        }
                    }
                    )}
            </NewDivStyle>
        )
    };

    if (props.status === 'FINALIZADO') {
        return (
            <NewDivStyle className="teste">
                <ParagraphTitleStyle>{status}</ParagraphTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <ParagraphGreenStyle> {item.name} </ParagraphGreenStyle>

                                    <Button action='postRequest' value="<<" link={baseURLPendente + item._id}></Button>

                                    <Button action='postRequest' value="<" link={baseURLFazendo + item._id}></Button>

                                    <Button action='deleteRequest' value="X" link={baseURLDelete + item._id}></Button>

                                </DivStyle>
                            )
                        }
                    }
                    )}
            </NewDivStyle>
        )
    };



}



export default TableMetas;
