const axios = require("axios");

// 📌 Function to get all books
// Makes a GET request to fetch all books from the server
async function getAllBooks() {
  try {
    const response = await axios.get("http://localhost:5000/");
    return response.data; // returns all books data
  } catch (error) {
    console.error("Error fetching all books:", error);
  }
}

// 📌 Function to get book by ISBN
// Takes ISBN as input and fetches book details
async function getByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    return response.data; // returns book matching ISBN
  } catch (error) {
    console.error("Error fetching book by ISBN:", error);
  }
}

// 📌 Function to get books by Author
// Takes author name and returns matching books
async function getByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    return response.data; // returns list of books by author
  } catch (error) {
    console.error("Error fetching books by author:", error);
  }
}

// 📌 Function to get books by Title
// Takes title as input and returns matching books
async function getByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    return response.data; // returns books with given title
  } catch (error) {
    console.error("Error fetching books by title:", error);
  }
}

// Export functions (if required)
module.exports = {
  getAllBooks,
  getByISBN,
  getByAuthor,
  getByTitle
};