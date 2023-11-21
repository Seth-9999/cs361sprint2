import "dotenv/config";
import * as reviews from "./reviews_model.mjs";
import express from "express";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/apiv01/reviews", (req, res) => {
  console.log("Entering - Controller - Post/Reviews");
  reviews
    .createReview(
      req.body.APIKey,
      req.body.productID,
      req.body.title,
      req.body.body
    )
    .then((reviews) => {
      console.log("Leaving - Controller - Post/Reviews (Success)");
      res.status(201).json(reviews);
    })
    .catch((error) => {
      console.log(error);
      console.log("Leaving - Controller - Post/Reviews (Error)");
      res.status(400).json({ Error: "Request Failed" });
    });
});

app.get("/apiv01/reviews/:_APIKey", (req, res) => {
  console.log("Entering - Controller - Get/Reviews");
  const APIKey = req.params._APIKey;
  reviews
    .findAllReviews({ APIKey })
    .then((reviews) => {
      console.log("Leaving - Controller - Get/Reviews APIKey (Success)");
      res.send(reviews);
    })
    .catch((error) => {
      console.error(error);
      console.log("Leaving - Controller - Post/Reviews APIKey (Failure)");
      res.send({ Error: "Request failed" });
    });
});

app.get("/apiv01/reviews/:_APIKey/:_productID", (req, res) => {
  console.log("Entering - Controller - Get APIKey ProductID");
  const APIKeyFilter = req.params._APIKey;
  const productIDFilter = req.params._productID;

  const filter = {
    APIKey: APIKeyFilter,
    productID: productIDFilter,
  };
  reviews
    .findAllReviews(filter)
    .then((reviews) => {
      console.log("Leaving - Controller - Get APIKey ProductID (Success)");
      res.send(reviews);
    })
    .catch((error) => {
      console.error(error);
      console.log("Entering - Controller - Get APIKey ProductID (Failure)");
      res.send({ Error: "Request failed" });
    });
});

app.put("/apiv01/reviews/:_commentID", (req, res) => {
  console.log("Entering - Controller - Put CommentID");
  console.log(`API Key entered: ${req.body.APIKey}`);

  // new data obj passed into update function if valid
  let newData = { title: "blah" };
  newData.APIKey = req.body.APIKey;
  newData.productID = req.body.productID;
  newData.title = req.body.title;
  newData.comments = req.body.body;
  newData._id = req.params._commentID;

  // filter object - id
  let objUserID = {};
  objUserID._id = req.params._commentID;

  // Notify if invalid body inputs
  let error_obj = { Error: "Invalid Request" };
  console.log(`Revised Data: ${newData}`);
  console.log(newData);

  reviews
    .updateReview(objUserID, newData)
    .then((updatesTracker) => {
      if (updatesTracker.matchedCount === 1) {
        console.log("Leaving - Controller - Put CommentID (Success)");
        res.json({
          _commentID: req.body.commentID,
          APIKey: req.params._APIKey,
          productID: req.body.productID,
          title: req.body.title,
          comments: req.body.body,
        });
      } else {
        console.log("Leaving - Controller - Put CommentID (Not Found)");
        res.status(404).json({ Error: "Not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      console.log("Leaving - Controller - Put CommentID (Error)");
      res.status(400).json({ Error: "Request failed" });
    });
});

app.delete("/apiv01/reviews/:_commentID", (req, res) => {
  console.log("Entering - Controller - Delete CommentID");
  reviews
    .deleteById(req.params._commentID)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        console.log("Leaving - Controller - Delete CommentID (Success)");
        res.status(204).send();
      } else {
        console.log(
          "Leaving - Controller - Delete CommentID (Not find comment)"
        );
        res.status(404).json({ Error: "Not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      console.log("Leaving - Controller - Delete CommentID (Error)");
      res.send({ error: "Request failed" });
    });
});

app.use("/", (req, res) => {
  console.log(__dirname);
  console.log(req.params.url);
});
app.all("/*", (req, res) => {
  console.log("Entered catchall error route");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
