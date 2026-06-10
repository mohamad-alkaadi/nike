# Nike Landing Page Clone (nike-2-0)

A modern, responsive landing page clone of Nike built with React, Vite, and Tailwind CSS. This project showcases a beautiful user interface with various sections highlighting popular products, super quality shoes, special offers, customer reviews, and a newsletter subscription form.

## 🚀 Tech Stack

- **React** (v18)
- **Vite** (Next Generation Frontend Tooling)
- **Tailwind CSS** (Utility-first CSS Framework)
- **ESLint & Prettier** (Code formatting and linting)

## ✨ Features

- **Responsive Design**: fully responsive across all devices (mobile, tablet, desktop).
- **Hero Section**: eye-catching introduction with a prominent call-to-action.
- **Popular Products**: displays a grid of popular shoes.
- **Super Quality**: highlights the premium quality and craftsmanship.
- **Services**: showcases services like free shipping, secure payment, and support.
- **Special Offers**: features ongoing promotions and discounts.
- **Customer Reviews**: displays feedback and ratings from customers.
- **Newsletter Subscription**: allows users to subscribe for updates.

## 📁 Project Structure

The project follows a component-based architecture, modularizing different sections of the landing page:

```text
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components (Nav, Button, ShoeCard, etc.)
├── constants/      # Static data and constants
├── sections/       # Main page sections (Hero, PopularProducts, Footer, etc.)
├── App.jsx         # Main application entry point uniting all sections
├── index.css       # Global styles and Tailwind directives
└── main.jsx        # React DOM rendering
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   cd nike
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Lints the source code using ESLint.

### Deployment Link

https://nike-tau-smoky.vercel.app/

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
