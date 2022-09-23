import React from "react";
import ArticlesCard from "../Components/Articles/ArticlesCard";
import SearchArticles from "../Components/Articles/SearchArticles";
import PageHeader1 from "../Components/PageHeader1";
import mockedArticle from "../Global/articles";

export default function article() {
  return (
    <section>
      <PageHeader1 image="/images/_articles/articles.png" text="Articles" />
      <div className="container">
        <SearchArticles />
        <div className="grid--3">
          {mockedArticle.map((item) => (
            <ArticlesCard
              content={item.content}
              id={item.id}
              img={item.imageUrl}
              title={item.title}
              time={item.timestamp}
              key={item.id}
              avatar={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
