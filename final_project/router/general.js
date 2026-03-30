const axios = require("axios");

// Get all books
async function getAllBooks() {
  const response = await axios.get("http://localhost:5000/");
  return response.data;
}

// Get by ISBN
async function getByISBN(isbn) {
  const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
  return response.data;
}

// Get by Author
async function getByAuthor(author) {
  const response = await axios.get(`http://localhost:5000/author/${author}`);
  return response.data;
}

// Get by Title
async function getByTitle(title) {
  const response = await axios.get(`http://localhost:5000/title/${title}`);
  return response.data;
}