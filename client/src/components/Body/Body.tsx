import { useState, useEffect } from 'react'
import './Body.css'
import axios from 'axios';

import NewsCard from './NewsCard/NewsCard';
import { Article } from '../../../../backend/src/Entities/Article';

interface BodyProps {
    articles: Article[];
}

function Body({articles}: BodyProps) {

    return (
        <div className="body-wrapper">
        <h3 className="results-title">Search results for: “query”</h3>
        <div className="card-grid">
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              image={"../../../assets/sample_image.jpg"} // Placeholder image
              source={article.ns || "Unknown"}
              title={article.title || "Untitled"}
              time={"1h"} // Placeholder time
              location={article.author || "Unknown"}
            />
          ))}
        </div>
        </div>
      );
    
}

export default Body;

