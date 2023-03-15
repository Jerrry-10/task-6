import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookInfo from "../components/BookInfo";
import useBookData from "../hook/getBookData";
import Skeleton from "react-loading-skeleton";
const Book = () => {
  const params = useParams();

  const [loading, error, bookData] = useBookData(params.id);

  return (
    <Container>
      {loading && (
        <div className="max-w-[230px]">
          <Skeleton count="10" />
        </div>
      )}
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!loading && !error && bookData && <BookInfo book={bookData} />}
    </Container>
  );
};

export default Book;
