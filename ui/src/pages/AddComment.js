import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddComment = () => {
  const [title, setTitle] = useState("");
  const [productID, setProductID] = useState("1");
  const [body, setBody] = useState("");
  const [APIKey, setAPIKey] = useState("");
  //   const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { productID, APIKey, title, body };
    const response = await fetch("/apiv01/reviews", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    if (response.status === 201) {
      alert("Successfully added review/comment");
    } else {
      alert(
        `Failed to create comment. Please contact IT, status code = ${response.status}`
      );
    }
    navigate("/");
  };

  return (
    <div className="CreateComment">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productID">Product ID#</label>
          <select
            id="productID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          >
            <option value="1">Ender's Game</option>
            <option value="2">Wolfblade</option>
            <option value="3">Atomic Habits</option>
            <option value="4">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="APIKey">API Key</label>
          <input
            id="APIKey"
            type="text"
            required
            vaue={APIKey}
            onChange={(e) => setAPIKey(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="body">Comments</label>
          <br />
          <textarea
            required
            value={body}
            rows="6"
            cols="50"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* <div>
          <label htmlFor="rating">(Don't use) Rating</label>
          <input
            id="rating"
            type="number"
            required
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
          />
        </div> */}

        <button>Add Comment</button>
      </form>
      <br></br>
      <br></br>
      <p>ProductID: {productID}</p>
      <p>APIKey: {APIKey}</p>
      <p>Title: {title}</p>
      <p>Comments: {body}</p>
      {/* <p>Rating (1-5): {rating}</p> */}
      <br></br>
    </div>
  );
};

export default AddComment;
