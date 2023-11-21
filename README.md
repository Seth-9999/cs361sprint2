# API

## assumption: requested MongoDB connection string from me to update .env

### steps to run microservice (rating system)

### 1. npm ci

### 2. npm install dotenv

### 3. npm start

## API endpoints

### GET requests

#### GET /apiv01/reviews/:\_APIKey | No body accepted -> Retrieves all reviews for supplied system

#### GET /apiv01/reviews/:\_APIKey/:\_productID | No body accepted -> retrieves all reviews for desired product

### POST requests

#### POST /apiv01/reviews |Body(APIKey, productID, title, body) -> Create a review

### PUT requests

#### PUT /apiv01/reviews/:\_commentID - |Body(APIKey, productID, title, body) > update a review's info

### DELETE requests

#### DELETE /apiv01/reviews/:\_commentID |No body accepted -> delete a speciic comment

# UI

## assumption: updated proxy on package.json if change api port# from 3000

### steps to run React UI

### 1. npm ci

### 2. npm start


# Sequence Diagram
[Sequence Diagram](./diagram.png)

