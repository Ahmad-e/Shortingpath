import Cookies from 'universal-cookie';

export const cookies = new Cookies(2000000);

const theme={
     mode:cookies.get('color-theme')
 };
     export const setTheme = ()=>{
          if(cookies.get('color-theme')===undefined)
               theme.mode = "light"
     }
   export const toggleTheme = () => {
        if (theme.mode === 'light') {
          theme.mode='dark';
         cookies.set('color-theme', 'dark', { path: '/' });
        } else {
          theme.mode='light';
         cookies.set('color-theme', 'light', { path: '/' });
        }
    window.location.reload(true);
      };
    export default theme;