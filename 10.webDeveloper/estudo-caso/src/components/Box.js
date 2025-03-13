import { useBox } from "../context/box-context";

export const Box = (props) => {
  const boxContext = useBox();
  const { items, boxId } = props;
  return (
    <div className="box">
      {items.map((button) => {
        return (
          <button
            onClick={() => {
              boxContext.dispatch({ type: `box-${boxId}` });
            }}
          >
            {button.name}
          </button>
        );
      })}
    </div>
  );
};
