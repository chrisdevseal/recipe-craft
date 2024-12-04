
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainPage from "./page";
import MenuBar from "@/components/MenuBar";



 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
     <html lang="en">
      <body>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
            <MenuBar/>
            {children}
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
  
 }
