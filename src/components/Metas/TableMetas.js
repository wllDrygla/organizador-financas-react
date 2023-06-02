import styled from "styled-components";
import TableRow from "../TableCategory/TableCategoryRow";
import React, { useState } from "react";
import axios from "axios";

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
border:1px black double;
background-color: rgba(240, 0, 0, 0.100);

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
border:1px black double;
background-color: rgba(0, 0, 240, 0.100);

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
border:1px black double;
background-color: rgba(0, 240, 0, 0.100);

@media ( max-width: 768px ){
    font-size:18px;
}
`
const DivRedStyle = styled.div`
text-align:center;
border: 2px black solid;
border-radius: 5px;
margin:0px;
padding:30px;
background-color:white;
background-color: rgba(240, 0, 0, 0.207);
overflow-y: scroll;
overflow-x: hidden;
height: 400px;
margin:1%;
@media (max-width: 768px) {
  margin: 5%;
}
`
const DivBlueStyle = styled.div`
text-align:center;
border: 2px black solid;
border-radius: 5px;
margin:0px;
padding:30px;
background-color:white;
background-color: rgba(0, 100, 255, 0.100);
overflow-y: scroll;
overflow-x: hidden;
height: 400px;
margin:1%;
@media (max-width: 768px) {
  margin: 5%;
}
`

const DivGreenStyle = styled.div`
text-align:center;
border: 2px black solid;
border-radius: 5px;
margin:0px;
padding:30px;
background-color:white;
background-color: rgba(0, 240, 0, 0.100);
overflow-y: scroll;
overflow-x: hidden;
height: 400px;
margin:1%;
@media (max-width: 768px) {
  margin: 5%;
}
`
const InputStyle = styled.input`
margin:4px;
font-size:20px;
border-radius: 5px;
text-align: center;
padding:3px;
max-width: 250px;
font-weight:bolder;
border: 2px red solid;
background-color: white
@media (max-width: 768px){
  font-size: 13px;
  border: 2px blue solid;
  margin:5%;

}
`

const TableMetas = (props) => {
    const [meta, setMeta] = React.useState([]);
    const baseURLFinalizar = "https://api-finances-will.onrender.com/api/metas/finalizar/"
    const baseURLPendente = "https://api-finances-will.onrender.com/api/metas/pendente/"
    const baseURLFazendo = "https://api-finances-will.onrender.com/api/metas/fazendo/"

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
            <DivRedStyle className="teste">
                <ParagraphTitleStyle>{status}</ParagraphTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <ParagraphRedStyle> {item.name} </ParagraphRedStyle>
                                    <form method="post" action={baseURLFazendo + item._id}>
                                        <InputStyle
                                            type="submit"
                                            value="FAZENDO">
                                        </InputStyle>
                                    </form>
                                    <form method="post" action={baseURLFinalizar + item._id}>
                                        <InputStyle
                                            type="submit"
                                            value="FINALIZAR">
                                        </InputStyle>
                                    </form>
                                </DivStyle>
                            )
                        }
                    }
                    )}
            </DivRedStyle>
        )
    };
    if (props.status === 'FAZENDO') {
        return (
            <DivBlueStyle className="teste">
                <ParagraphTitleStyle>{status}</ParagraphTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <ParagraphBlueStyle> {item.name} </ParagraphBlueStyle>
                                    <form method="post" action={baseURLPendente + item._id}>
                                        <InputStyle
                                            type="submit"
                                            value="PENDENTE">
                                        </InputStyle>
                                    </form>
                                    <form method="post" action={baseURLFinalizar + item._id}>
                                        <InputStyle
                                            type="submit"
                                            value="FINALIZAR">
                                        </InputStyle>
                                    </form>
                                </DivStyle>
                            )
                        }
                    }
                    )}
            </DivBlueStyle>
        )
    };

    if (props.status === 'FINALIZADO') {
        return (
            <DivGreenStyle className="teste">
                <ParagraphTitleStyle>{status}</ParagraphTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <ParagraphGreenStyle> {item.name} </ParagraphGreenStyle>
                                    <form method="post" action={baseURLPendente + item._id}>
                                        <InputStyle
                                            type="submit"
                                            value="PENDENTE">
                                        </InputStyle>
                                    </form>
                                    <form method="post" action={baseURLFazendo + item._id}>
                                        <InputStyle
                                            type="submit"
                                            value="FAZENDO">
                                        </InputStyle>
                                    </form>
                                </DivStyle>
                            )
                        }
                    }
                    )}
            </DivGreenStyle>
        )
    };



}



export default TableMetas;
