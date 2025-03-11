import { useState } from "react";
import "./AppContext.css";

const Button = ({ children, themeValueButton }) => {
  return <button className={`${themeValueButton}`}>{children}</button>;
};

const Paragraph = ({ children, themeValueParagraph }) => {
  return (
    <p>
      Child: {children}
      <br></br>
      <Button themeValueButton={themeValueParagraph}>Click</Button>
    </p>
  );
};

const Main = () => {
  const [theme, setTheme] = useState("a2017");
  return (
    <main>
      <h1>Hello</h1>
      <Paragraph themeValueParagraph={theme}>This is normal text</Paragraph>
      <button
        onClick={() => {
          setTheme("a2018");
        }}
      >
        Dark Theme
      </button>
      <button
        onClick={() => {
          setTheme("a2017");
        }}
      >
        Light Theme
      </button>
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
