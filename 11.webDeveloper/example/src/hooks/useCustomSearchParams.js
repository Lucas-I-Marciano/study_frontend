import { useSearchParams } from "react-router";

export const useCustomSearchParams = (defaultMax = 10, defaultOffset = 0) => {
  const [searchParams] = useSearchParams();

  const max = parseInt(searchParams.get("max")) || defaultMax;
  const offset = parseInt(searchParams.get("offset")) || defaultOffset;

  return {
    max,
    offset,
  };
};
