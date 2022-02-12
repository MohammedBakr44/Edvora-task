import { useState, useEffect } from "react";
import Filters from "./filters";

export default function Home({ res }) {
  useEffect(() => {}, []);

  console.log(res);

  return (
    <div className="container">
      <div className="headings">
        <h1>Edvora</h1>
        <h3>Products</h3>
      </div>
      <Filters data={res} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #292929;
          color: #fff;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 350px 350px auto;
          }

          .headings {
            grid-row-start: 1;
            grid-column-start: 2;
          }

          .headings h3 {
            margin-top: 30px;
            padding: 5px;
            font-weight: 500;
            color: rgba(256, 256, 256, 0.5);
          }
        `}
      </style>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://assessment-edvora.herokuapp.com/");
  const fetchedData = await data.json();

  return {
    props: {
      res: fetchedData,
    },
  };
}
