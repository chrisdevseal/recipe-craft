"use client"

import { Button,Paper } from'@mui/material'
import React from 'react';


export default function ReceiptListElement({ name,description }: {
    name:  String
    description: String
}){

    return (
        <div className='my-5'>
            <Paper><div>Rezept {name}</div><div>{description}</div><Button color="primary" onClick={() => navigateTo(name)}>Details</Button></Paper>
        </div>
        
    )


    function navigateTo(id :String){
        console.log(id);    
    }
}



