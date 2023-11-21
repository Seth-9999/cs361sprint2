import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */

const reviewsSchema = mongoose.Schema({
  APIKey: { type: String, required: true },
  productID: { type: String, required: true },
  title: { type: String, required: true },
  comments: { type: String, required: true },
});

const Review = mongoose.model("reviews01", reviewsSchema);

const createReview = async (APIKey, productID, title, comments) => {
  console.log("Entering - Model - Create review");
  console.log(`API Key entered: ${APIKey}`);
  const review = new Review({
    APIKey: APIKey,
    productID: productID,
    title: title,
    comments: comments,
  });
  console.log("Leaving - Model - Create Review");
  return review.save();
};

const findAllReviews = async (filter) => {
  console.log("Entering - Model - FindAllReviews");
  const query = Review.find(filter);
  console.log("Leaving - Model - FindAllReviews");
  return query.exec();
};

const findReviewById = async (filter) => {
  console.log("Entering - Model - findReviewByID");
  const query = Review.findById(filter);
  console.log("Leaving - Model - FindAllReviews");
  return query.exec();
};

const updateReview = async (filter, update) => {
  console.log("Entering - Model - UpdateReview");
  const result = await Review.updateOne(filter, update);
  console.log("Leaving - Model - UpdateReview");
  return result;
};

const deleteById = async (_id) => {
  console.log("Entering - Model - deleteByID");
  const result = await Review.deleteOne({ _id: _id });
  console.log("Leaving - Model - deleteByID");
  return result.deletedCount;
};

export { createReview };
export { findAllReviews };
export { findReviewById };
export { updateReview };
export { deleteById };
