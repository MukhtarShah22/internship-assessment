# E-commerce Product Listing

This project is a simple e-commerce application built with React. It displays a list of products fetched from the Fake Store API and allows users to view individual product details.

## Features

- Display a list of products with their name, price, rating, and image
- View detailed information about each product
- Responsive design for various screen sizes

## Technologies Used

- React
- React Router for navigation
- Axios for API requests
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/ecommerce-product-listing.git
   ```

2. Navigate to the project directory:

   ```
   cd ecommerce-product-listing
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the application in development mode, run:

```
npm start
```

The application will start and can be accessed at [http://localhost:3000](http://localhost:3000) in your web browser.

## Project Structure

- `src/components`: Contains reusable components (ProductList, ProductCard, ProductDetails)
- `src/pages`: Contains page components (ListingPage, ProductPage)
- `App.js`: Main component that sets up routing
- `index.js`: Entry point of the application
- `index.css`: Global styles for the application

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.
