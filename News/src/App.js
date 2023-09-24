import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2a1080d9d2e944ca871c32c1b093866e');
        const data = await response.json();

        if (response.ok) {
          setNews(data.articles);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    //zdes ocistka
    return () => {
    };
  }, []);

  return (
    <div>
      <h1>Last news</h1>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsApp;

