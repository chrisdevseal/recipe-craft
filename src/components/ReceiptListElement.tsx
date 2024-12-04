import { Button,Paper } from'@mui/material'
import Link from 'next/link';
import React from 'react';


export default function ReceiptListElement({id, name,description }: {
    id: Number
    name:  String
    description: String
}){

    return (
        <div className='my-5'>
            <Paper><div>{name}</div><div>{description}</div><Link passHref href = {`/recipe/${id}`} ><Button color="primary">Details anzeigen</Button></Link></Paper>
        </div>
    )
}



