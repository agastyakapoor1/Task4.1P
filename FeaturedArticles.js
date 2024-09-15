import React from 'react';

function FeaturedArticles() {
  const articles = [
    { id: 1, title: 'Article One', description: 'Description of Article One' },
    { id: 2, title: 'Article Two', description: 'Description of Article Two' },
    // Add more articles as needed
  ];

  return (
    <section>
      <h2>Featured Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedArticles;
