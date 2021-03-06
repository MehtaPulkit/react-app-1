import React from "react";
import ReactDOM from "react-dom";
// import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/utils/ScrollToTop";

const store = configureStore();

const Lib = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
};
ReactDOM.render(<Lib />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
