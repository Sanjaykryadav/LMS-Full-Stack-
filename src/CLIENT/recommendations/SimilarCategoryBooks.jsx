import React from "react";
import { backend_server } from "../../main";
import "./SimilarCategoryBooks.css"; // Import CSS for consistent styling
import BookList from "../featuredBooks/BookList";

const SimilarCategoryBooks = ({ category }) => {
  const [similarBooks, setSimilarBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchSimilarBooks = async () => {
      if (!category) return;

      const response = await fetch(`${backend_server}/api/v1/books`);
      const data = await response.json();

      const filteredBooks = data.data.filter((book) => book.category === category);
      setSimilarBooks(filteredBooks);
    };

    fetchSimilarBooks();
  }, [category]);

  return (
    similarBooks.length > 0 ? (
      <div className="similar-books-section">
        <h2 className="section-title">Similiar Books Like You Searched :</h2>
        <BookList books={similarBooks.slice(0, 8)} /> {/* Display up to 8 books */}
      </div>
    ) : (
      <></>
    )
  );
};

export default SimilarCategoryBooks;
