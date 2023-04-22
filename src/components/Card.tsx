import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function ListaPokemons(){
  React.useEffect(()=>{
    async function carregarPokemons(){
      const resposta = await fetch('https://pokeapi.co/api/v2/berry/1')
      const pokemonsListados = await resposta.json
      return pokemonsListados
    }
    carregarPokemons()
  }, []);
}

function PokemonExibido(){
  const [pokemon, setPokemon] = React.useState([]);
  return (
    <div>
      <ul>
        {pokemon.map(pokemon =>(
          <li key={pokemon}>
            {pokemon}
          </li>
        ))}
      </ul>
    </div>
  )
}



export default function MediaCard() {
  return (
    <div>
      <Grid container margin='20px 0px 0px 10px' xs={12} sm={12} md={12} lg={12} xl={12}  >

        <Card sx={{ maxWidth: 300, margin: '0px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg" // imagens dos pokemons que será carregada do banco de dados
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, margin: '0px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg" // imagens dos pokemons que será carregada do banco de dados
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, margin: '0px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg" // imagens dos pokemons que será carregada do banco de dados
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

    </div>
  );
}