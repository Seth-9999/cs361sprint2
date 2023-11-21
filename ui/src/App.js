import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import KeyRules from "./pages/Checkout";
import LogIn from "./pages/LogIn";
import GetCard from "./pages/GetCard";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import { useState } from "react";
import AddComment from "./pages/AddComment";
import Reviews from "./pages/Reviews";
import EditComment from "./pages/EditComment";
import DeleteComment from "./pages/DeleteComment";

function App() {
  const libraryItems = [
    {
      itemNo: 1,
      title: "Ender's Game",
      type: "Book",
      author: "Orson Scott Card",
      isAvailable: 1,
    },
    {
      itemNo: 2,
      title: "Wolfblade",
      type: "Book",
      author: "Jennifer Fallon",
      isAvailable: 1,
    },
    {
      itemNo: 3,
      title: "Atomic Habits",
      type: "Book",
      author: "James Clear",
      isAvailable: 1,
    },
    {
      itemNo: 4,
      title: "Building Java Programs",
      type: "Book",
      author: "Stuart Reges / Marty Stepp",
      isAvailable: 1,
    },
  ];

  const [items, setItems] = useState(libraryItems);
  const [numItems, setNumItems] = useState(4);
  const [filteredResults, setFilteredResults] = useState(items);
  const [filterText, setFilterText] = useState("");

  const handleSearchingCatalog = (searchText, arr = -1) => {
    setFilterText(searchText);
    // console.log("Where are myItems arr test results");
    // console.log(myItems);
    let newResults = [];
    if (arr === -1) {
      arr = items;
    }

    // console.log("App.jS handleSearchingCatalog line#57 fired");
    // console.log(filteredResults);
    // console.log(filterText);
    // console.log(searchText);
    // console.log("items: ");
    // console.log(items);
    // console.log("App.jS handleSearchingCatalog line#61 fired");
    // if (searchText === "") {
    //   setFilteredResults(myItems);
    //   return;
    // }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].title.includes(searchText)) {
        newResults.push(arr[i]);
      } else if (arr[i].author.includes(searchText)) {
        newResults.push(arr[i]);
      } else if (arr[i].itemNo.toString().includes(searchText)) {
        newResults.push(arr[i]);
      }
    }

    // alert(newResults);
    // console.log(newResults);
    console.log("App.jS handleSearchingCatalog line#78 fired");
    console.log(newResults);
    console.log("App.jS handleSearchingCatalog line#80 fired");
    setFilteredResults(newResults);
  };

  const handleReturnItem = (targetItemNumber) => {
    let alreadyAvailable = false;
    let wasFound = false;
    let libItems = [...items];

    for (let i = 0; i < items.length; i++) {
      if (items[i].itemNo.toString() === targetItemNumber) {
        wasFound = true;
        if (libItems[i].isAvailable === 0) {
          libItems[i].isAvailable = 1;
          alert("Returned item!");
        } else {
          alreadyAvailable = true;
        }
      }
    }
    setItems(libItems);

    if (wasFound === false) {
      alert("Item# not found in catalog");
    }
    if (alreadyAvailable === true) {
      alert("Item already is available");
    }
  };

  const handleCheckOut = (targetItemNumber) => {
    // alert("Handled checkout");
    // alert(targetItemNumber);
    // alert("Num items in array");

    if (targetItemNumber < 0) {
      alert("Item# has to be positive");
      return;
    }
    let itemEnd = items[items.length - 1];
    if (targetItemNumber > itemEnd.itemNo) {
      alert("Not find item#");
      return;
    }

    // change to while loop
    let wasFound = false;
    let alreadyChecked = false;
    let libItems = [...items];

    for (let i = 0; i < items.length; i++) {
      if (items[i].itemNo.toString() === targetItemNumber) {
        wasFound = true;
        if (libItems[i].isAvailable === 1) {
          libItems[i].isAvailable = 0;
          alert("Checked out item!");
        } else {
          alreadyChecked = true;
        }
      }
    }
    setItems(libItems);

    if (alreadyChecked === true) {
      alert("Item already was checked out");
    }

    if (wasFound === false) {
      alert("Item# not in existing catalog list");
    }
  };

  const handleAddItem = (itemTitle, itemAuthor) => {
    setNumItems(numItems + 1);
    const newItem = {
      itemNo: numItems + 1,
      title: itemTitle,
      type: "Book",
      author: itemAuthor,
      isAvailable: 1,
    };
    const newItems = [...items, newItem];
    console.log("App.js HandleAddItem fired line#159");
    console.log(newItems);
    console.log("App.js HandleAddItem fired line#161");
    // console.log(newItems);
    setItems(newItems);

    handleSearchingCatalog(filterText, newItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                handleAddItem={handleAddItem}
                items={filteredResults}
                handleCheckOut={handleCheckOut}
                handleReturnItem={handleReturnItem}
                handleSearchingCatalog={handleSearchingCatalog}
              />
            }
          ></Route>
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Create_Comment" element={<AddComment />} />
          <Route path="Edit_Comment" element={<EditComment />} />
          <Route path="Delete_Comment" element={<DeleteComment />} />
          <Route path="Checkout_Hold_Rules" element={<KeyRules />}></Route>
          <Route path="LogIn" element={<LogIn />}></Route>
          <Route path="GetCard" element={<GetCard />}></Route>
          <Route path="FAQ" element={<FAQ />}></Route>
          <Route path="Feedback" element={<Feedback />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
