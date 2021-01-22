import React from "react";
import cx from "classnames";
import { toggleTodo } from "../redux/action";
import { connect } from "react-redux";

class Todo extends React.Component {
  render() {
    return (
      <li className="todo-item" onClick={() => toggleTodo(this.props.todo.id)}>
        {this.props.todo && this.props.todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx(
            "todo-item__text",
            this.props.todo &&
              this.props.todo.completed &&
              "todo-item__text--completed"
          )}
        >
          {this.props.todo.content}
        </span>
      </li>
    );
  }
}

export default connect(null, { toggleTodo })(Todo);
