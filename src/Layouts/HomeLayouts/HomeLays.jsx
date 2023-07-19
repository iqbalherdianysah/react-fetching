import React from "react";
import BgHome from "./../../assets/images/Background1.jpg";
import Cards from "../../Components/Cards/Cards";

const HomeLays = () => {
  return (
    <>
      <section className=" flex flex-col text-center bg=[url('./../../assets/images/Background1.jpg')">
        <div>
          <div className="mb-5">
            <h1 className="text-3xl font-semibold pt-4">
              Read books is fun and relaxing
            </h1>
          </div>
          <div className="flex justify-center">
            <h2 className="max-w-3xl text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              eligendi praesentium reprehenderit excepturi, autem ipsa dolorum
              corrupti dolore corporis quos aspernatur quo sequi, et dicta, eum
              quaerat in facere aliquid!
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap mt-10 bg-blue-400 gap-5 justify-center">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </>
  );
};

export default HomeLays;
