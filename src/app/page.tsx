import {Paper, Grid2,Box} from '@mui/material';
import ReceiptListElement from '../components/ReceiptListElement';
import data from '@/lib/data';


export default function MainPage() {

  const recipes = data;
  return (
    <div className="mt-10">
      <div className='flex flex-col cont'>
        <h1 className='size-full text-center  text-xl'>Startseite</h1>
      </div>
      <div className='mx-5 mt-5'>
          <Box sx={{ flexGrow: 1 }}>
            <Paper>
              <Grid2 size={12}>
                <div className='mt-5'></div>
                <h1 className='size-full text-center  text-xl'>Rezeptliste</h1></Grid2>
                <Paper>
                  {recipes.map(element => <ReceiptListElement key={element.id} id={element.id} name= {element.name} description={element.description}/>)}
                </Paper>
            </Paper>
          </Box>
      </div>
    </div>
  );
}
