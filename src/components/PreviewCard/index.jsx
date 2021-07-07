import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {
  Link
} from 'react-router-dom';

import Types from './Types';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '.5rem'
  },
  media: {
    height: 10,
    backgroundSize: 'contain',
    
  },
});

export default function PreviewCard({ pokemon }) {
  const classes = useStyles();

  const { id, name, types } = pokemon;
  const sprite = pokemon.sprites ? getSprite(pokemon.sprites) : '';

  return (
     <Link to={`/pokemon/${id}`}>
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={sprite}
          />
                <CardContent>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            style={{width:100,height:100, paddingBottom:40,textAlign:'center',
            marginLeft:10,padding:12}}/>

            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            {types ? <Types types={types} /> : ''}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link> 
         
  );
};

// Loop through object sprites and return first existing image
function getSprite(sprites) {
  const keys = Object.keys(sprites);
  const values = Object.values(sprites);
  for (let i = keys.length; i > 0; i--) {
    if (values[i] !== undefined && values[i] !== null) {
        return values[i];
    }
  };
};