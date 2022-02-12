const Display = (props) => {
  return (
    <div className="display">
      <ul>
        {props.data.map((item) => (
          <li>{item.product_name}</li>
        ))}
      </ul>
      <style jsx>{`
        .display {
          grid-row-start: 2;
          grid-column-start: 2;
        }
      `}</style>
    </div>
  );
};

export default Display;
