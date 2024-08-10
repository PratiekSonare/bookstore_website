import React, { useState } from 'react';
import SearchCard from './SearchCard';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    setSearchResults([]); // Clear previous results
    setShowResults(true); // Show results section

    try {
      const response = await fetch(`/search?q=${encodeURIComponent(searchQuery)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (response.ok) {
          if (Array.isArray(data)) {
            setSearchResults(data);
          } else if (data && typeof data === 'object') {
            setSearchResults([data]); // Wrap single object in an array
          } else {
            setError('Unexpected response structure');
            console.error('Unexpected response structure:', data);
          }
        } else {
          setError(data.message || 'An error occurred');
        }
      } else {
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
    <div className='md:w-1/2 space-y-8 h-full'>
      <div className='flex flex-col items-center -ml-40'>
        <form onSubmit={handleSearch} className='flex w-full max-w-md'>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search a book'
            className='flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type='submit'
            className='bg-blue-700 text-white font-semibold px-6 py-2 rounded-r-md hover:bg-blue-900 transition-all duration-300'
          >
            Search
          </button>
        </form>
      </div>

      {/* Search Results */}
      {showResults && (
        <div className='mt-6 -ml-40'>
          <div className='shadow-md rounded-xl p-5'>
            <h3 className='text-2xl font-bold mb-4'>Search Results:</h3>
            <ul>
              {error ? (
                <li>
                  <p className='text-red-600'>Book unavailable, please mention the <span className='font-bold'>correct title</span> or <span className='font-bold'>request</span> the book you intend to read.</p>
                </li>
              ) : searchResults.length === 0 ? (
                <li>
                  <p>Please request a book above.</p>
                </li>
              ) : (
                searchResults.map((book) => (
                  <SearchCard key={book._id} book={book} />
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
