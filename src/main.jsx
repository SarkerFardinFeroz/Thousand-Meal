import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import MealDetails from "./components/MealDetails/MealDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/categories",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php/"),

        element: <Categories />,
      },
      {
        path: "/category/:categoryName",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.categoryName}`
          );
        },
        element: <Meals />,
      },
      {
        path: "/meals/:mealsName",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealsName}`
          );
        },
        element: <MealDetails />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
