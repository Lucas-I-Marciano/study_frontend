import { Box } from "./Box";
import { useBox } from "../context/box-context";

export const BoxList = () => {
  const boxContext = useBox();
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
