import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey.A400
    },
    secondary: {
      main: '#ff6666'
    }
  },
  typography: {
    fontSize: 10,
    htmlFontSize: 10,
    fontFamily: ['Poppins', 'sans-serif'].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Regular.woff2") format('woff2');
          font-weight: 400;
          font-style: 'normal';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Italic.woff2") format('woff2');
          font-weight: 400;
          font-style: 'italic';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Thin.woff2") format('woff2');
          font-weight: 100;
          font-style: 'normal';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-ThinItalic.woff2") format('woff2');
          font-weight: 100;
          font-style: 'italic';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Light.woff2") format('woff2');
          font-weight: 300;
          font-style: 'normal';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-LightItalic.woff2") format('woff2');
          font-weight: 300;
          font-style: 'italic';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Medium.woff2") format('woff2');
          font-weight: 500;
          font-style: 'normal';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-MediumItalic.woff2") format('woff2');
          font-weight: 500;
          font-style: 'italic';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Bold.woff2") format('woff2');
          font-weight: 700;
          font-style: 'normal';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-BoldItalic.woff2") format('woff2');
          font-weight: 700;
          font-style: 'italic';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-Black.woff2") format('woff2');
          font-weight: 900;
          font-style: 'normal';
          font-display: swap;
        }
        @font-face {
          font-family: 'Poppins';
          src: url("/fonts/Poppins/Poppins-BlackItalic.woff2") format('woff2');
          font-weight: 900;
          font-style: 'italic';
          font-display: swap;
        }
      `
    }
  }
})

export default theme
