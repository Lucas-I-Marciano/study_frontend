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
    case "box-1": {
      const { buttonId } = action;
      const buttonObject = state.firstBox.find((buttonElement) => {
        return buttonElement.id === buttonId;
      });
      const newStateSecondBox = [...state.secondBox, buttonObject];

      const newStateFirstBox = state.firstBox.filter((buttonElement) => {
        return buttonElement.id !== buttonId;
      });

      return {
        firstBox: newStateFirstBox,
        secondBox: newStateSecondBox,
      };
    }

    case "box-2":
      return state;
    default:
      break;
  }
};

export const BoxProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoxContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BoxContext.Provider>
  );
};
