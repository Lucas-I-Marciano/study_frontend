import { createContext, useContext, useReducer } from "react";

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "success": {
        return action.data;
      }
      case "loading": {
        return [];
      }
      case "failed": {
        return [];
      }

      default:
        break;
    }
    return state;
  };

  const [query, dispatch] = useReducer(reducer, []);
  return (
    <QueryContext.Provider value={{ result: query, dispatch }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQuery = () => {
  return useContext(QueryContext);
};
