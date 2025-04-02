import { useEffect, useState } from "react";
import { getGeneral } from "../services/general";

export const PublicPage = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const toQuery = async () => {
      const response = await getGeneral();
      setText(response.data.message);
    };
    toQuery();
  });

  return (
    <div>
      <h1>PublicPage</h1>
      <p>{text}</p>
    </div>
  );
};
