import { createContext, useContext, useReducer } from "react";
import { fetchData } from "../utils/fetchData";

const initial_state = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "todos": {
        return [{ todo: 1 }];
      }
      case "users": {
        return [{ users: 1 }];
      }
      case "posts": {
        return [{ posts: 1 }];
      }

      default:
        break;
    }
    return state;
  };

  const [query, dispatch] = useReducer(reducer, initial_state);
  return (
    <QueryContext.Provider value={{ result: query, dispatch }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQuery = () => {
  return useContext(QueryContext);
};
