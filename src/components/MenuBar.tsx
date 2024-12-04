"use client"


import { Button,Paper,Grid2,TextField } from'@mui/material'
import React from 'react';

export default function MenuBar() {

    return ( <Paper>
        <Grid2 container rowSpacing={2} spacing={1}> 
          <Grid2 size={1} alignItems={'center'} alignContent={'center'}><Button className='ml-1.5 w-11/12'>Menu</Button></Grid2>
          <Grid2 size={10} alignItems={'center'} alignContent={'center'}><div className='my-1.5'><TextField className='w-full' id="outlined-basic" label="Suche" variant="outlined" /></div></Grid2>
          <Grid2 size={1} alignItems={'center'} alignContent={'center'}><Button className='w-11/12'>Suchen</Button></Grid2>
        </Grid2>
      </Paper>)
}