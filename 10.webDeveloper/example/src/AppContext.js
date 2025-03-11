import { Component } from "react";
import "./AppContext.css";

const Button = ({ children, onClick, theme }) => {
  return <button className={`a${theme}`}>{children}</button>;
};

const Paragraph = ({ children }) => {
  return <p>Child: {children}</p>;
};

const Main = ({ theme }) => {
  return <main></main>;
};

function App() {
  return (
    <div className="App">
      <Component>
        <Main theme="a2017">
          <Paragraph>
            <Button>Hello world 1</Button>
            <Button>Hello world 2</Button>
          </Paragraph>
        </Main>
      </Component>
    </div>
  );
}

export default App;
