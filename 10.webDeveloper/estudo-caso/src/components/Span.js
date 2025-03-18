import { useQuery } from "../context/query-context";

export const Span = () => {
  const queryResult = useQuery();
  return (
    <span>
      {queryResult.result.map((element) => {
        return <p>{JSON.stringify(element)}</p>;
      })}
    </span>
  );
};
