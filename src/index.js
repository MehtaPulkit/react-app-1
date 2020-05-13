import React from "react";
import ReactDOM from "react-dom";
// import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";

const Lib = () => {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
};
ReactDOM.render(<Lib />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
