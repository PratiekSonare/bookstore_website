import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleBook() {
    const {_id, bookTitle, imageURL } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-4'>
        <img src={imageURL} alt='' className='h-96'></img>
        <h2>{bookTitle}</h2>
    </div>
  )
}

export default SingleBook