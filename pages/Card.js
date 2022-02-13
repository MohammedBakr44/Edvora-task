const Card = (props = null) => {
  return (
    <div className="card">
      <div className="box1">
        <div className="img-wrapper">
          <img src={props.image} />
        </div>
        <div className="header">
          <h4>{props.product_name}</h4>
          <p>{props.brand_name}</p>
          <p style={{ color: "#fff" }}>$ {props.price}</p>
        </div>
      </div>
      <div className="box2">
        <p>
          {props.address.city}, {props.address.state}
        </p>
        <div>
          <p>Date: {props.date.slice(0, 10).split("-").join(":")}</p>
        </div>
      </div>
      <p>{props.discription}</p>
      <style jsx>{`
        .card {
          padding: 10px;
          background-color: #232323;
          border-radius: 8px;
          min-width: 300px;
        }

        .card .box1 {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          gap: 50px;
        }

        .card .box1 .img-wrapper {
          aspect-ratio: 1/1;
          max-width: 250px;
          overflow: hidden;
          flex: 1;
        }

        .card .box1 .img-wrapper img {
          width: 100%;
          height: auto;
        }

        .card .box1 .header {
          flex: 3;
          margin-left: auto;
        }

        .card p {
          font-size: 14px;
          color: rgba(256, 256, 256, 0.6);
          flex-grow: 1;
        }

        .card .box1 .header p {
          font-size: 16px;
        }

        .card .box2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 20px;
        }

        .card .box2 p:first-child {
          flex: 3;
        }

        .card .box2 p:last-child {
          flex: 1;
          margin-left: auto;
        }
      `}</style>
    </div>
  );
};

export default Card;
