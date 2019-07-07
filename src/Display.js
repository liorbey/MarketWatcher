import React, { Component } from 'react';
import axios from 'axios';
import './Display.css';

class Display extends Component {
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
      this.setState({ url: 'https://newsapi.org/v2/everything?q=Bitcoin&from=2019-07-07&sortBy=popularity&apiKey=08b9f7be5f844af1ac6e5e1635bf1dc5' });

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
      .get('https://newsapi.org/v2/everything?q=cryptocurrency&from=2019-07-07&sortBy=popularity&apiKey=08b9f7be5f844af1ac6e5e1635bf1dc5')
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
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
                <div><a href={news.url}>link</a></div>
              </div>
              <div className="image">
                  <a href={news.url} >
                     <img src={news.urlToImage} alt="" />
                  </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Display;