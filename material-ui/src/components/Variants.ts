import {createTheme} from '@mui/material/styles';
import {responsiveFontSizes} from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface TypographyVariants {
    h7: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h3: false;
  }
}
export const theme = responsiveFontSizes(createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: 'black',
          color: 'black',
          '&:hover': {
            borderColor: 'black',
          }
        }
      },
    },
  },
}));