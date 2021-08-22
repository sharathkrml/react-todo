import "./App.css";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  // const saveTodo=(e)=>{
  //   setTodo(e.target.value)
  //   console.log(todo);
  // }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        {/* <input onChange={saveTodo} value={todo} type="text" placeholder="🖊️ Add item..." /> */}
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((onetodo) => {
          return (
            <div key={onetodo.id} className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      todos.filter((todo_obj) => {
                        if (todo_obj === onetodo) {
                          todo_obj.status = e.target.checked;
                        }
                        return todo_obj;
                      })
                    );
                  }}
                  checked={onetodo.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{onetodo.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    setTodos(todos.filter((todo) => todo !== onetodo));
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      {todos.map((i) => {
        if (i.status) {
          return <h1>{i.text}</h1>;
        }
        return null;
      })}
    </div>
  );
}

export default App;
