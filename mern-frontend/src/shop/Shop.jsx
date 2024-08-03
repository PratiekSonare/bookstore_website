import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Shop = ({ addToCart = () => {} }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/book-list");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-28 px-4 lg:px-24 flex'>
      <div className='flex-1'>
        <h2 className='text-5xl font-bold text-center'>Library!</h2>
        <div className='mt-10 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
          {books.map(book => (
            <Card key={book._id} className="max-w-[18rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={book.imageURL}
                  alt={book.title}
                  className="w-full h-30 object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue-gray">
                  {book.title}
                </Typography>
                <Typography variant="small" color="gray" className="mt-3 truncate">
                  {book.description.substring(0, 100)}{book.description.length > 100 ? '...' : ''}
                </Typography>
              </CardBody>
              <CardFooter className="absolute mt-10 bottom-0 left-0 right-0 p-4">
                <Button
                  className="w-full bg-blue-700 rounded-b-xl text-center font-normal"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop type validation
Shop.propTypes = {
  addToCart: PropTypes.func,
};

export default Shop;
