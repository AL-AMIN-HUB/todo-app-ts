import React, { useCallback, useReducer, useRef } from "react";

const Todo = () => {
  interface Todo {
    id: number;
    text: string;
  }

  type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number };

  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  };

  // userReducer hook
  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  // useCallback hook
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);
  return (
    <>
      <h2>ADD TODO LIST</h2>
      <div className="add">
        <input type="text" className="input" ref={newTodoRef} />
        <button onClick={onAddTodo} className="btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
          </svg>
          <span>Add List</span>
        </button>
      </div>

      <div className="list_item">
        {todos.map((todo) => (
          <div className="list" key={todo.id}>
            <ul>
              <li>{todo.text}</li>
            </ul>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })} title="Remove" className="button">
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
