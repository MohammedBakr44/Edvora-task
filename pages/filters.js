import { useState } from "react";
import Display from "./Display";

const Filters = (props) => {
  const [filters, setFilters] = useState({});
  const [res, setRes] = useState(props.data);
  const [filtered, setFiltered] = useState(props.data);

  const handleChange = (e) => {
    setFilters({ ...filters, [`${e.target.name}`]: e.target.value });
    setFiltered(
      res.filter((item) => item[`${e.target.name}`] == e.target.value)
    );
  };
  return (
    <>
      <Display data={filtered} />
      <div className="filters">
        <h2>Filters</h2>
        <hr />
        <select name="product_name" onChange={handleChange}>
          <option value="">Products</option>
          {props.data.map((item, i) => {
            return (
              <option key={i} value={item["product_name"]}>
                {item["product_name"]}
              </option>
            );
          })}
        </select>

        <select name="address.state" onChange={handleChange}>
          <option value="">State</option>
          {props.data.map((item, i) => {
            return (
              <option key={i} value={item.address.state}>
                {item.address.state}
              </option>
            );
          })}
        </select>

        <select name="address.city" onChange={handleChange}>
          <option value="">City</option>
          {props.data.map((item, i) => {
            return (
              <option key={i} value={item.address.city}>
                {item.address.city}
              </option>
            );
          })}
        </select>
      </div>

      <style jsx>
        {`
          .filters {
            width: 275px;
            height: 320px;
            padding: 20px;
            background-color: #131313;
            color: #a5a5a5;
            margin: 50px 20px;
            border-radius: 10px;
            grid-row: 1 / span 3;
            grid-column-start: 1;
            grid-column-end: 3;
          }
          select {
            border: none;
            border-radius: 5px;
            padding: 10px;
            background-color: #232323;
            color: #fff;
            margin-bottom: 20px;
            cursor: pointer;
            width: 80%;
          }
          select:first-of-type {
            margin-top: 20px;
          }

          h2 {
            font-weight: 300;
          }

          hr {
            border: 1px solid #cbcbcb;
            width: 90%;
            transform: translateX(-5%);
          }
        `}
      </style>
    </>
  );
};

export default Filters;
