const Book = (props) => {
  let bookIsAvailable = props.isAvailable;

  return (
    <>
      <p>
        {props.itemNo} | {props.title} | {props.author} |{" "}
        {bookIsAvailable === 1 ? "Available" : "CheckedOut"}
      </p>
    </>
  );
};

export default Book;
