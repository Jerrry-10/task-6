function BookInfo({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <div className="flex">
        <img
          src={book.imageURL}
          alt={book.title}
          className="w-64 h-96 object-contain float-left mr-4"
        />
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Author: {book.author}
          </h2>
          <p className="text-gray-600 mb-6">Year: {book.year}</p>
          <p className="text-gray-600 mb-6">Pages: {book.pages}</p>
          <p className="text-gray-600 mb-6">Publisher: {book.publisher}</p>
          <p className="text-gray-600 mb-6">Country: {book.country}</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
