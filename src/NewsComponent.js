import React from 'react';

const NewsComponent = ({ newsData }) => {
    return (
        <div>
            <h2>Top News Headlines</h2>
            {newsData.map((article, index) => (
                <div key={index}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                
                </div>
            ))}
        </div>
    );
};

export default NewsComponent;
