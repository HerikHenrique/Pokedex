import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Test from './components/Test'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const meuApp = {
  backgroundColor: 'yellow',
}


function App() {
  return (
    <div className="App" style={meuApp}>

    <Grid 
    container
    direction="row"
  justifyContent="center"
  alignItems="center">
      
    <Header/>
      </Grid>




      <Grid
      container
      marginTop={8}
  
      >

      <Card />
      </Grid> 








      <Test />

  
     
    </div>
  );
}

export default App;