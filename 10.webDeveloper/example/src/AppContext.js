import { useState } from "react";
import "./AppContext.css";

const Button = ({ children }) => {
  return <button className={`a2017`}>{children}</button>;
};

const Paragraph = ({ children }) => {
  return (
    <p>
      Child: {children}
      <br></br>
      <Button>Click</Button>
    </p>
  );
};

const Main = () => {
  const [theme, setTheme] = useState("a2017");
  return (
    <main>
      <h1>Hello</h1>
      <Paragraph>This is normal text</Paragraph>
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
