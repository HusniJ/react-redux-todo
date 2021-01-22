import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <TodoApp name="Todo App Redux-React" />
  </Provider>,
  document.getElementById("root")
);
