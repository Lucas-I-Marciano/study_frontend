import { useLocation } from "react-router";

export const useCustomSearchParams = (defaultMax = 10, defaultOffset = 0) => {
  const { search } = useLocation();
  const urlSearchParam = new URLSearchParams(search);

  const max = parseInt(urlSearchParam.get("max")) || defaultMax;
  const offset = parseInt(urlSearchParam.get("offset")) || defaultOffset;

  return {
    max,
    offset,
  };
};
