import React, { useState } from "react";
import { TextInput, Label, Button, Select } from 'flowbite-react';

function BookForm() {
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Mythology",
    "Autobiography",
    "Self-help",
    "Business",
    "Children",
    "Memoir"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const description = form.description.value;
    const imageURL = form.imageURL.value;
    const category = form.inputState.value;

    const bookObj = {
      title, author, description, imageURL, category
    };

    console.log(bookObj);

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book uploaded successfully!");
      form.reset();
    });
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ml-96">Add a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex max-w-md flex-col gap-8 ml-96">
        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Name" />
            </div>
            <TextInput id="title" name="title" type="text" placeholder="Enter book name" required className="w-full" />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput id="author" name="author" type="text" placeholder="Enter author name" required className="w-full" />
          </div>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <textarea id="description" name="description" placeholder="Enter book description" required className="w-full h-24 border border-gray-300 rounded"></textarea>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Image URL" />
          </div>
          <TextInput id="imageURL" name="imageURL" type="text" placeholder="Enter image URL" required className="w-full" />
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select id="inputState" name="inputState" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>

        <div className="w-full">
          <Button type="submit" className="bg-blue-700 w-full">
            Add Book
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
