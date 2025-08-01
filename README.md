# E-Commerce Frontend Assessment

This is a fully functional e-commerce frontend application built as part of a technical assessment. The project demonstrates best practices in modern frontend development using Next.js, TypeScript, Redux Toolkit, and Tailwind CSS.

## Features

- **Home Page:** Fetches and displays a list of products from the Fake Store API in a responsive grid.
- **Product Details Page:** Statically generated pages for each product with detailed information and dynamic SEO metadata.
- **Shopping Cart:** Users can add, remove, and update the quantity of items in their cart.
- **Checkout:** A validated form to collect customer information and place an order.
- **Order Management:** A page to view a list of all previously placed orders.
- **State Management:** Centralized state management for the cart and orders using Redux Toolkit.
- **Responsive Design:** The application is fully responsive and mobile-friendly.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Data Fetching:** Axios

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Folder Structure

The project follows a modular and organized folder structure:

```
src
├── app/              # Next.js App Router pages and layouts
│   ├── (pages)/      # Page components (e.g., page.tsx, product/[productId]/page.tsx)
│   └── layout.tsx    # Root layout for the application
├── components/       # Reusable React components (Navbar, ProductCard, etc.)
├── store/            # Redux Toolkit setup
│   ├── cartSlice.ts  # Reducer and actions for the shopping cart
│   ├── orderSlice.ts # Reducer and actions for orders
│   ├── store.ts      # Redux store configuration
│   └── StoreProvider.tsx # Provider component to wrap the app
├── types/            # TypeScript type definitions (Product, Order, etc.)
└── utils/            # Utility functions (currently empty)
public/               # Static assets
├── robots.txt        # SEO instructions for web crawlers
└── sitemap.xml       # SEO sitemap for page indexing
```

## Redux Structure

State management is handled by Redux Toolkit, which simplifies the process of writing Redux logic.

-   **`cartSlice.ts`**: Manages all state related to the shopping cart. It includes actions for adding, removing, incrementing, and decrementing items.
-   **`orderSlice.ts`**: Manages the list of submitted orders. It includes an action for adding a new order to the state after a successful checkout.
-   **`store.ts`**: This file configures and creates the Redux store, combining the reducers from the different slices.
-   **`StoreProvider.tsx`**: A client-side component that wraps the root layout of the application, making the Redux store available to all components in the tree.

## SEO Implementation

Several SEO best practices have been implemented to improve the site's visibility and ranking on search engines.

-   **Dynamic Metadata**: The product details page (`/product/[id]`) uses Next.js's `generateMetadata` function to create unique `<title>` and `<meta name="description">` tags for each product. This helps search engines understand the content of each page.
-   **`robots.txt`**: A `public/robots.txt` file is included to instruct search engine crawlers on which pages to index. It also includes a link to the sitemap.
-   **`sitemap.xml`**: A `public/sitemap.xml` file is provided to help search engines discover and crawl the site's most important pages. For this project, it is static, but it could be dynamically generated in a larger application.
-   **Semantic HTML**: The application uses semantic HTML5 elements such as `<main>`, `<header>`, `<footer>`, `<nav>`, and `<section>` to provide better structure and improve accessibility and SEO.
-   **Image Optimization**: All images are rendered using the Next.js `<Image>` component, which provides automatic optimization, resizing, and lazy loading. All images also include descriptive `alt` tags.
