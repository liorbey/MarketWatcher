import React, { Fragment } from 'react';
import NewsItem from './NewsItem';

const NewsList = props => {
    if(props.res === undefined ){
        return(<div>No article!</div>);

    }
    if (props.res.length === 0) {
        return(<div>No article!</div>);
    }
   
    return(
        <Fragment>
            {props.res.map(article =>(
                <NewsItem
                title = {article.title}
                description = {article.description}
                url = {article.url}
                image = {article.urlToImage}
                author = {article.author}
                date = {article.publishedAt}
                />
            ))}
        </Fragment>
    );

};

export default NewsList;