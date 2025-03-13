export const Box = (props) => {
  const { items } = props;
  return (
    <div className="box">
      {items.map((button) => {
        return <button>{button.name}</button>;
      })}
    </div>
  );
};
