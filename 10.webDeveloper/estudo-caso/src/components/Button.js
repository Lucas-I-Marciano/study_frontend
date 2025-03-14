import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return "loading";
    case "consulting":
      return "consulting";
    case "failed":
      return "failed";
    case "idle":
      return "idle";

    default:
      break;
  }
};

export const Button = (props) => {
  const [state, dispatch] = useReducer(reducer, "idle");
  const { children, endpoint } = props;
  return (
    <div>
      <button
        onClick={async () => {
          dispatch({ type: "failed" });
        }}
      >
        {children} - {state}
      </button>
    </div>
  );
};
