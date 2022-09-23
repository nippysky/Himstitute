import React from "react";
import { BiArrowToRight, BiSave } from "react-icons/bi";

export default function ArticlesCard({
  img,
  title,
  content,
  id,k
  avatar,
  timestamp,
}) {
  return (
    <div className="articles-card">
      <div className="article-card-image-wrapper">
        <img src={img} alt={title} />
        <img className="article-card-image-avatar" src={avatar} />
      </div>
      <div classsName="article-card-body">
        <h4 className="article-card-title">{title}</h4>
        <p className="article-card-text">{content}</p>
      </div>
      <div className="article-card-actions">
        <p>
          Read Full Article <BiArrowToRight />
        </p>
        <BiSave size={24} />
      </div>
    </div>
  );
}
