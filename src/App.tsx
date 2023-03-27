import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Test from './components/Test'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Menu from './components/Menu';

const meuApp = {
  backgroundColor: 'yellow',
}


function App() {
  return (
    <div className="App" style={meuApp}>

      <Header/>

      <Grid container marginTop={5} >

        <Grid item >
        <Menu/>
        </Grid>

        <Grid>

      <Card />
        </Grid>

      </Grid> 
      <Test />

    
    </div>
  );
}

export default App;