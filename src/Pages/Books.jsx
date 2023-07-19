import React from "react";
import BooksLays from "./../Layouts/BooksLayouts/BooksLays";
import Navbar from "../Components/Navbar/Navbar";

const Books = () => {
  return (
    <>
      <section>
        <Navbar />
        <BooksLays />
      </section>
    </>
  );
};

export default Books;
