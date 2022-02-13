import { useState } from "react";
import Product from "./Product";

const Display = (props) => {
  const products = new Set(props.data.map((item) => item.product_name));

  return (
    <div className="display">
      {[...products].map((heading) => {
        return <Product key={heading} data={props.data} heading={heading} />;
      })}
      <style jsx>{`
        .display {
          width: 65vw;
          padding: 10px;
          grid-row-start: 2;
          grid-column-start: 2;
        }
      `}</style>
    </div>
  );
};

export default Display;
