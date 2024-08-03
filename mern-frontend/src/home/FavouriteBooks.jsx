import React, {useEffect, useState} from 'react'
import BookCards from '../components/BookCard'

const FavouriteBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/book-list").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])
  return (
    <div className='mx-10'>
      <BookCards books={books} headline="Our Favourite Books" />
    </div>
  )
}

export default FavouriteBooks