import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./style.css";

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <h1>{this.props.name}</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    );
  }
}
