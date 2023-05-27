import styled from "styled-components";
import TableRow from "./TableRow";
import React, { useState } from "react";

const DivStyle = styled.div`
text-align:center;
display: flex;
justify-content:space-evenly;
max-width: 90%;
`

const ParagraphStyle = styled.p`
font-family: 'Gelasio';
width:500px;
padding:5px;
border-radius:3px;
margin-bottom:1px;
border:1px black double;

`

const Table = (props) => {

    return (
        <div>
            <TableRow
                name={props.name}
                value={props.value}
                situacao={props.situacao}
                category={props.category}

                itemId={props._id}>

            </TableRow>
        </div>
    )
};



export default Table;
