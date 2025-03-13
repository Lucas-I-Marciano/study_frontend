import { useContext } from "react";
import { Box } from "./Box";
import { BoxContext } from "../context/box-context";

export const BoxList = () => {
  const boxContext = useContext(BoxContext);
  console.log(boxContext);
  // boxContext the Object initialState
  // firstBox: (3) [{…}, {…}, {…}]
  // secondBox: (3) [{…}, {…}, {…}]
  return (
    <div className="container">
      <Box items={boxContext.firstBox}></Box>
      <Box items={boxContext.secondBox}></Box>
    </div>
  );
};
