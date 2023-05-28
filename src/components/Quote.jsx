import React, { useState, useEffect } from 'react';


const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author"><li>{author}</li></p>
      <button id="new-quote" onClick={handleNewQuote}>
        New Quote
      </button>
      <a id="tweet-quote" href="#" onClick={handleTweetQuote}>
        Tweet Quote
      </a>
    </div>
  );
};

export default Quote;
