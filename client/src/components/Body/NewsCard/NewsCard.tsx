import React from "react"
import "./NewsCard.css"
import sampleImage from "../../../assets/sample_image.jpg"

interface NewsCardProps {
    key: number;
    image: string;
    source: string;
    title: string;
    time: string;
    location: string;
}

// figure out how to pass a readable image source
const NewsCard = ({ key, image, source, title, time, location }: NewsCardProps) => {
  return (
    <div className="news-card">
      <img src={sampleImage} alt="News" className="news-image" /> 
      <div className="news-content">
        <div className="news-header">
          <span className="news-source">{source}</span>
        </div>
        <h3 className="news-title">{title}</h3>
        <div className="news-meta">
          <span>{time} ago</span> • <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
