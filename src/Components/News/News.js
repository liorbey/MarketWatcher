import React, { Component } from 'react';
import axios from 'axios';
import { styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MyTypography = styled(Typography)({
  color: '#9E9E9E',
    
});

const MyCard = styled(Card)({
  maxWidth: 550,
  margin: 10,
  padding: 10,
  backgroundColor: '#2e1534',
    
});
const MyCardContent = styled(CardContent)({
  
})

const Media = styled(CardMedia)({
  height: 200,
});

class News extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: 'https://newsapi.org/v2/everything?q=Bitcoin&from=2019-07-07&language=en&sortBy=popularity&apiKey=08b9f7be5f844af1ac6e5e1635bf1dc5' });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year;
    return composedTime;
  }

  getArticles(url) {
    axios
      .get('https://newsapi.org/v2/everything?q=cryptocurrency&from=2019-07-07&language=en&sortBy=popularity&apiKey=08b9f7be5f844af1ac6e5e1635bf1dc5')
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
        {this.state.articles.map((news, i) => {
          return (
            <MyCard>
            <CardActionArea key={i}>
            <MyCardContent>
                <Typography noWrap color='#9E9E9E' gutterBottom variant="h5" component="h2">
                  {news.title}
                </Typography>
                <Typography noWrap paragraph variant="body2" color="textSecondary" component="p">
                  {news.description}
                </Typography>
              </MyCardContent>
              <Media
                href={news.url} 
                image={news.urlToImage}
              />
              </CardActionArea>
              <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button href={news.url} size="small" color="primary">
            Learn More
          </Button>
          <Typography>
                  By {news.author ? news.author : this.props.default}
          </Typography>
          <Typography>
                  {this.formatDate(news.publishedAt)}
          </Typography>
        </CardActions>
      </MyCard>
          );
        })}
      </div>
    );
  }
}

export default News;