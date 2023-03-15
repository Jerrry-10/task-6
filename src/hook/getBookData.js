import { useState, useEffect } from "react";

const useBookData = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bookData, setBookData] = useState([]);

  const getBookData = async (id) => {
    let url = "https://api.matgargano.com/api/books"; //Have to use let here because we want to use this same hook for books and book so I have to change it depending on if theirs id or not
    if (id) {
      url += `/${id}`;
    }
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setBookData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getBookData(id);
  }, [id]);

  return [loading, error, bookData];
};

export default useBookData;
