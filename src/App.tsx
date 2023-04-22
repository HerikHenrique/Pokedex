import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Test from './components/Test'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Menu from './components/Menu';
import { display, grid, height, margin } from '@mui/system';

const meuApp = {
  height: 980,
}


function App() {
  return (
    <div className="App" style={meuApp}>
    <Grid container>


      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Header/>
      </Grid>

      <Grid item 
      sx={{
        display: 'grid',
        margin: "20px 10px"
      }}>
        <Menu/>
      </Grid>

      <Grid>
        <Card/>
      </Grid>
<Test/>
    </Grid>
    </div>
  );
}

export default App;