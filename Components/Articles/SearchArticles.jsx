import React from "react";
import { BiArrowBack, BiSearch } from "react-icons/bi";

export default function SearchArticles() {
  return (
    <div className="searchbar-wrapper">
      <div className="search-iconButton">
        <BiArrowBack />
        <p>Back</p>
      </div>
      <div className="search-container">
        <h2 className="search-header">Researcg Articles</h2>
        <form className="article-search-input">
          <input
            type="text"
            className="article-search-placeholder"
            placeholder="Search title, tags and categories"
          />
          <BiSearch fontSize={24} />
        </form>
      </div>
      <div className="article-search-underline"></div>
    </div>
  );
}
