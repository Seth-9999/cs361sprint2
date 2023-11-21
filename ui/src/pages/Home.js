import Book from "../components/Book";
import { useState } from "react";

const Home = (props) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemAuthor, setItemAuthor] = useState("");
  const [targetBookNumber, setTargetBookNumber] = useState(0);

  console.log("Home.js | printing props.items | line#9");
  console.log(props.items);
  let currItems = props.items;

  const handleSearchInput = (e) => {
    // console.log("array");
    // console.log(arr);
    console.log("Home.js | handle Search input | was fired line16");
    // console.log(arr);
    console.log("Home.js | handle Search input | was fired line18");

    if (e.target.value === "") {
      console.log("Home.js | handle Search input | was fired line21");
      props.handleSearchingCatalog("");
    } else {
      console.log("Home.js | handle Search input | was fired line24");
      props.handleSearchingCatalog(e.target.value);
    }
  };

  return (
    <>
      <h1>Home Page</h1>

      {/* Catalog search and show catalog */}
      <section>
        <h2>Catalog Search</h2>
        <input
          type="text"
          placeholder="search catalog"
          size="100"
          style={{ marginLeft: "200px" }}
          onChange={(e) => handleSearchInput(e)}
        ></input>

        <div id="filtered-search-list">
          <p>Catalog:</p>
          <ul>
            {currItems.map((temp) => {
              return (
                <li>
                  <Book
                    itemNo={temp.itemNo}
                    title={temp.title}
                    author={temp.author}
                    isAvailable={temp.isAvailable}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section>
        <h2>Add Item</h2>
        <p>If filtering catalog, might need to un-filter the catalog </p>
        <label>Title</label>
        <input
          placeholder="Ender's Game"
          onChange={(e) => {
            setItemTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <label>Author</label>
        <input
          placeholder="Orson Scott Card"
          onChange={(e) => {
            setItemAuthor(e.target.value);
          }}
        ></input>
        <br></br>
        <button onClick={() => props.handleAddItem(itemTitle, itemAuthor)}>
          Add Item
        </button>
      </section>

      <section>
        <h2>Checkout Item</h2>
        <label>Item#</label>
        <input
          type="number"
          onChange={(e) => setTargetBookNumber(e.target.value)}
        ></input>
        <button onClick={() => props.handleCheckOut(targetBookNumber)}>
          Check Out Item
        </button>
      </section>

      <section>
        <h2>Return Item</h2>
        <label>Item#</label>
        <input
          type="number"
          onChange={(e) => setTargetBookNumber(e.target.value)}
        ></input>
        <button onClick={() => props.handleReturnItem(targetBookNumber)}>
          Return/Check In Item
        </button>
      </section>
    </>
  );
};

export default Home;
