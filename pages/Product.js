import Card from "./Card";

const Product = (props) => {
  return (
    <div className="product">
      <div className="header">
        <h1>{props.heading}</h1>
        <hr />
        <div className="cards">
          {props.data.map((item) => {
            return <Card {...item} />;
          })}
        </div>
      </div>
      <style jsx>{`
        .product {
          background-color: #131313;
          margin-top: 50px;
          padding: 30px;
          border-radius: 15px;
        }
        .cards {
          display: grid;
          grid-gap: 2rem;
          margin-top: 20px;
          margin: 20px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
      `}</style>
    </div>
  );
};

export default Product;
