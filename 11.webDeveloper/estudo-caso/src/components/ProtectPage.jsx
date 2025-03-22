import { NeedAuth } from "./NeedAuth";

export const ProtectPage = () => {
  return (
    <NeedAuth>
      <div>
        <h1>ProtectPage</h1>
      </div>
    </NeedAuth>
  );
};
