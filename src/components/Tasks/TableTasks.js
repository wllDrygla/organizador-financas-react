import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const DivStyle = styled.div`
text-align:center;
display: block;
justify-content:space-evenly;
max-width: 100%;
font-size:25px;
@media (max-width: 1920px){
    font-size:20px;
}

@media (max-width: 1440px){
    font-size:15px;
}

`
const TextContentTitleStyle = styled.h1`
font-family: 'Gelasio';
font-weight: bolder;
width:90%;
padding:15px;
margin-left:5%;
margin-bottom:1px;

@media ( max-width: 768px ){
    font-size:23px;
}
`

const TextContentRedStyle = styled.p`
font-family: 'Gelasio';
width:700px;

font-weight: bolder;
width:90%;
padding:15px;
border-radius:5px;
margin-left:5%;
margin-bottom:1px;
border:1px gray double;
background-color: rgba(255, 0, 50, 0.200);
@media ( min-width: 1920px ){
    font-size:18px;
}
@media ( max-width: 768px ){
    font-size:18px;
}
`

const TextContentBlueStyle = styled.p`
font-family: 'Gelasio';
width:700px;
font-weight: bolder;
width:90%;
padding:15px;
border-radius:5px;
margin-left:5%;
margin-bottom:1px;
border:1px gray double;
background-color: rgba(0, 200, 255, 0.200);
@media ( min-width: 1920px ){
    font-size:18px;
}
@media ( max-width: 768px ){
    font-size:18px;
}
`

const TextContentGreenStyle = styled.p`
font-family: 'Gelasio';
width:700px;
font-weight: bolder;
width:90%;
padding:15px;
border-radius:5px;
margin-left:5%;
margin-bottom:1px;
border:1px gray double;
background-color: rgba(0, 255, 100, 0.300);
@media ( min-width: 1920px ){
    font-size:18px;
}
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

const TableTasks = (props) => {
    const [meta, setMeta] = React.useState([]);
    const baseURLFinalizar = "https://api-finances-will.onrender.com/task/done/"
    const baseURLPendente = "https://api-finances-will.onrender.com/task/to-do/"
    const baseURLFazendo = "https://api-finances-will.onrender.com/task/doing/"
    const baseURLDelete = "https://api-finances-will.onrender.com/task/"

    const [formData, setFormData] = useState({
    });
    const status = props.status
    const user = props.user
    const baseURL = "https://api-finances-will.onrender.com/task/get-all/" + user
    var listaTasks = [
    ]
    var contador = 0
    React.useEffect(() => {
        axios.get(baseURL).then(tasksResult => {
            contador = contador + 1;
            if (contador <= 1) {
                for (let i = 0; i < tasksResult.data.Tasks.length; i++) {
                    listaTasks.push(tasksResult.data.Tasks[i]);
                    setMeta(listaTasks)
                }
            }

        });

    }, []);

    if (!meta) return (<h1>Carregando....</h1>);

    if (props.status === 'to-do') {
        return (
            <NewDivStyle className="teste">
                <TextContentTitleStyle>{status}</TextContentTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <TextContentRedStyle> {item.name} </TextContentRedStyle>
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
    if (props.status === 'doing') {
        return (
            <NewDivStyle className="teste">
                <TextContentTitleStyle>{status}</TextContentTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <TextContentBlueStyle> {item.name} </TextContentBlueStyle>

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

    if (props.status === 'done') {
        return (
            <NewDivStyle className="teste">
                <TextContentTitleStyle>{status}</TextContentTitleStyle>
                {
                    meta.map((item) => {
                        if (item.status == status) {
                            return (
                                <DivStyle>
                                    <TextContentGreenStyle> {item.name} </TextContentGreenStyle>

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



export default TableTasks;
