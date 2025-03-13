import { Box } from "./Box";
import { useBox } from "../context/box-context";

export const BoxList = () => {
  const boxContext = useBox();
  // boxContext the Object initialState
  // firstBox: (3) [{…}, {…}, {…}]
  // secondBox: (3) [{…}, {…}, {…}]
  return (
    <div className="container">
      <Box boxId="1" items={boxContext.state.firstBox}></Box>
      <Box boxId="2" items={boxContext.state.secondBox}></Box>
    </div>
  );
};
