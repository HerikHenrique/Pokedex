import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



export default function MediaCard() {
  return (
    <div>
      <Grid container spacing={2} marginLeft={2} >

      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
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

      <Grid item xs={12}  sm={3} md={3} lg={3} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
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

      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
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

      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
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

      


      </Grid>

    </div>
  );
}