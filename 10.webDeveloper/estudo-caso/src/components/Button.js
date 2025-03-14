import { useReducer } from "react";
import { fetchData } from "../utils/fetchData";

import { useQuery } from "../context/query-context";

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

export const Button = (props) => {
  const query = useQuery();
  const queryDispath = query.dispatch;

  const [state, dispatch] = useReducer(reducer, "idle");
  const { children, endpoint } = props;
  return (
    <div>
      <button
        onClick={async () => {
          dispatch({ type: "loading" });
          queryDispath({ type: endpoint });
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
