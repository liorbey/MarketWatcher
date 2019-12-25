
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import LinkIcon from '@material-ui/core/Link';
import { styled } from '@material-ui/core/styles';


const NewsItem = props =>{
    const MyTypography = styled(Typography)({
        color: '#D9B08C',
          
      });
      
      const MyCard = styled(Card)({
        width: '98%',
        margin: 10,
        padding: 10,
        backgroundColor: '#D1E8E2',

          
      });
      const MyCardContent = styled(CardContent)({

      });
      
      const Media = styled(CardMedia)({
        height: 200,
      });
    return(
              <MyCard>
              <CardActionArea>
              <MyCardContent>
                  <Typography noWrap color='#D9B08C' gutterBottom variant="h5" component="h2">
                    {props.title}
                  </Typography>
                  <Typography noWrap paragraph variant="body2" color="textSecondary" component="p">
                    {props.description}
                  </Typography>
                </MyCardContent>
                <Media
                  href={props.url} 
                  image={props.image}
                />
                </CardActionArea>
                <CardActions>
            <Fab href={props.url} variant="extended" aria-label="Learn More" color="primary.contrastText">
            <LinkIcon />
            Learn More
            </Fab>
            <Fab style={{margin: '20px'}}variant="extended" aria-label="Share" color="primary.contrastText">
            Share
            </Fab>
            <Typography variant="subtitle4" color="secondary.contrastText" component="p">
                    By {props.author ? props.author : null}
            </Typography>

          </CardActions>
        </MyCard>
            );

};

export default NewsItem;