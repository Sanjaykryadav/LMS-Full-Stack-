import React from "react";
import { backend_server } from "../../main";
import "./LocalStorageRecommendations.css"; // Import CSS for consistent styling
import BookList from "../featuredBooks/BookList";

const LocalStorageRecommendations = () => {
  const [recommendedBooks, setRecommendedBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchRecommendations = async () => {
      const storedPreferences = JSON.parse(localStorage.getItem("preference")) || [];
      if (storedPreferences.length === 0) {
        setRecommendedBooks([]);
        return;
      }

      const response = await fetch(`${backend_server}/api/v1/books`);
      const data = await response.json();
      const recommendations = data.data.filter((book) =>
        storedPreferences.includes(book.category)
      );
      setRecommendedBooks(recommendations);
    };

    fetchRecommendations();
  }, []);

  return (
    recommendedBooks.length > 1 ? (  <div className="book-section">
        <h2 className="section-title">Recommended Books</h2>
        <BookList books={recommendedBooks.slice(0, 8)} /> 
      </div>) : (
        <></>
      )
  
  );
};

export default LocalStorageRecommendations;
