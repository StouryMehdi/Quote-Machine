import React from 'react';
import axios from 'axios';
import './Quote.css';

function Quote() {
  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');

  React.useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('url');
      setQuote(response.data.quote);
      setAuthor(response.data.author);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='quote-container'>
      <h1 className='quote'>{quote}</h1>
      <div className='author-container'>
        <p className='author'>{author}</p>
        /*test */
        <button onClick={fetchQuote} className='new-quote-button'>New Quote</button>
      </div>
    </div>
  );
}

export default Quote;
