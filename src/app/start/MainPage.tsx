"use client"

import {Paper, Grid2,Box} from '@mui/material';
import ReceiptListElement from '../../components/ReceiptListElement';
import MenuBar from '@/components/MenuBar';

export default function MainPage() {
  return (
    <div className="mt-10">
      <div className='flex flex-col cont'>
        <h1 className='size-full text-center  text-xl'>Startseite</h1>
      </div>
      <div className='mx-5 mt-5'>
       
          <Box sx={{ flexGrow: 1 }}>
          <MenuBar/>
            <Paper>
              <Grid2 size={12}>
                <div className='mt-5'></div>
                <h1 className='size-full text-center  text-xl'>Rezeptliste</h1></Grid2>
                <Paper>
                  <ReceiptListElement name= {"1"} description={"hier"}/>
                  <ReceiptListElement name = {"2"} description={"da"}/>
                  <ReceiptListElement name = {"3"} description={"la"}/>
                </Paper>
            </Paper>
          </Box>
      </div>
    </div>
  );
}
