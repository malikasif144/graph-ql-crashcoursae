import './components/MuiClassNameSetup'
import "./App.css";
import { Container } from "@mui/system";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FeaturedPost from "./components/FeaturedPost";
import { Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import MUIModal from "./components/MUIModal";

function App() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            body1: 'label',
          },
        },
      },
    },
  })
  return (
    <div >
    <ThemeProvider theme={theme}>
      <Container>
      <Header />
      <br/>
      <Typography variant="body1" component='label' htmlFor='Custom-Label'>Components</Typography>
        <Routes>
           <Route path="/" element={<FeaturedPost/>}/>
          <Route path="/modal" element={<MUIModal/>} />
        </Routes>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
