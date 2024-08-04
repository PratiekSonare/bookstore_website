import React, { useState } from 'react';
import BannerCard from '../home/BannerCard';
import './test.css';

function Banner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');  

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error

    try {
      const response = await fetch(`/search?q=${encodeURIComponent(searchQuery)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the response is JSON
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (response.ok) {
          console.log('Search results:', data);
          setSearchResults([data]); // Expecting a single book object
        } else {
          setError(data.message || 'An error occurred');
        }
      } else {
        // Handle non-JSON responses (like HTML error pages)
        const text = await response.text();
        setError('Unexpected response from server');
        console.error('Unexpected response:', text);
      }
    } catch (error) {
      console.error('Error searching:', error);
      setError('An error occurred while searching');
    }
  };

  return (
    <div className='px-4 lg:px-12 bg-white'>
      <div className='flex w-full flex-col md:flex-row justify-around items-center gap-0 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-6xl font-bold text-black text-left'>
            Lending books becomes easy!{' '}
            <span className='text-blue-700 block mt-10 text-4xl'>
              Now at IIT Bombay
            </span>
          </h2>
          <p className='md:w-4/5 text-justify quicksand-thin'>
            Are you an avid book reader finding difficulty in procuring books to
            read? We're here to solve just that! We're lending books to insti junta
            so that they can keep up with their hobbies of reading without any
            hassle!
          </p>
          <div className='h-10'>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search a book'
              className='rounded-bl-lg rounded-tl-lg h-15 border-2 border-black'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className='rounded-br-lg rounded-tr-lg bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300 border-2 border-black'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {searchResults.length > 0 && (
            <div className='mt-4'>
              <h3 className='text-2xl font-bold'>Search Results:</h3>
              <ul>
                {searchResults.map((book) => (
                  <li key={book._id}>{book.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='mr-10 mt-auto'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
