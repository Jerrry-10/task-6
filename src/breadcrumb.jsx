import { useLocation } from "react-router-dom";
import useBookData from "./hook/getBookData";
function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  if (path !== "books" && path !== "about" && path !== "home") {
    // This is to prevent the breadcrumb from showing up on the books page and sending a request to the API for the book with the id of "books"
    const [loading, error, book] = useBookData(path);
    return (
      <div>
        <span> / </span>
        {book.title}
      </div>
    );
  } else {
    return;
  }
}
export default Breadcrumb;
