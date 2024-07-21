import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/book-list").then(res => res.json()).then(data => setBooks(data));
  }, [])

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>Library!</h2>

      <div className='mt-10 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
        {
          books.map(book => (
            <Card className="max-w-[18rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={book.imageURL}
                  alt="sample alt text"
                  className="w-full h-30 object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue-gray">
                  {book.title}
                </Typography>
                <Typography variant="h10" color="gray" className="mt-3 truncate">
                  {book.description.substring(0, 100)}{book.description.length > 100 ? '...' : ''}
                </Typography>
              </CardBody>
              <CardFooter className="absolute mt-10 bottom-0 left-0 right-0 p-4">
                <Button className="w-full bg-blue-700 rounded-b-xl text-center font-normal">Buy Now!</Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Shop;