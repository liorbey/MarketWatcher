import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList';

const News = () => {
  const [loadedArticles,setLoadedArticles] = useState();

  useEffect(()=>{
    axios
      .get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-25&sortBy=publishedAt&apiKey=43602355d68e4c1389f73906760ed98f')
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        setLoadedArticles(articles)
      })
      .catch(error => {
        console.log(error);
      });
  },[])
    
  
    return (
      <div style={{display:'block'}}>
        <NewsList res = {loadedArticles}/>
      </div>
    );
  }


export default News;