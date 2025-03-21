import { useEffect } from "react";
import { getGeneral } from "../services/general";

export const PublicPage = () => {
  useEffect(() => {
    const toQuery = async () => {
      const response = await getGeneral();
      console.log("response", response);
    };
    toQuery();
  });

  return (
    <div>
      <h1>PublicPage</h1>
    </div>
  );
};
