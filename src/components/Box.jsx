const Box = ({ name, title, location }) => {
  return (
    <div className="box">
      <p>{name}</p>
      <p>{title}</p>
      <p>{location}</p>
    </div>
  );
};

export default Box;
