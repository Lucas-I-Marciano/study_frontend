import { useState, createContext, useContext } from "react";
import "./AppContext.css";

const Button = ({ children, themeValueButton }) => {
  const theme = useContext(ThemeContext);
  return <button className={`${theme}`}>{children}</button>;
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

const ThemeContext = createContext();

const Main = () => {
  const [theme, setTheme] = useState("a2017");
  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
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
