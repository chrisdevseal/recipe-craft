
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainPage from "./start/MainPage";



 export default function RootLayout() {
   return (
     <html lang="en">
      <body>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
              <MainPage/>
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
  
 }
