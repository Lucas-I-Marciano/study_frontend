import { createContext, useContext, useReducer } from "react";

const initialState = {
  firstBox: [
    {
      id: 0,
      name: "button 0",
    },
    {
      id: 1,
      name: "button 1",
    },
    {
      id: 2,
      name: "button 2",
    },
  ],
  secondBox: [
    {
      id: 3,
      name: "button 3",
    },
    {
      id: 4,
      name: "button 4",
    },
    {
      id: 5,
      name: "button 5",
    },
  ],
};

export const BoxContext = createContext();

export const useBox = () => {
  return useContext(BoxContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "box-1":
      console.log("Clicou na box 1");
      return state;
    case "box-2":
      console.log("Clicou na box 2");
      return state;
    default:
      break;
  }
};

export const BoxProvider = (props) => {
  return (
    <BoxContext.Provider value={initialState}>
      {props.children}
    </BoxContext.Provider>
  );
};
