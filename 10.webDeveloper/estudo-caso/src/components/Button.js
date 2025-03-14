import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return "loading";
    case "success":
      return "success";
    case "failed":
      return "failed";
    case "idle":
      return "idle";

    default:
      break;
  }
};

const fetchData = async (endpoint) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`
  );
  const jsonResponse = await response.json();
  return jsonResponse;

  // return jsonResponse;
};

export const Button = (props) => {
  const [state, dispatch] = useReducer(reducer, "idle");
  const { children, endpoint } = props;
  return (
    <div>
      <button
        onClick={async () => {
          dispatch({ type: "loading" });
          try {
            const response = await fetchData(endpoint);
            setTimeout(() => {
              if (Object.keys(response).length !== 0) {
                dispatch({ type: "success" });
              } else {
                dispatch({ type: "failed" });
              }
            }, 500);
          } catch {
            dispatch({ type: "failed" });
          }
        }}
      >
        {children} - {state}
      </button>
    </div>
  );
};
