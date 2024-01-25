import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import {
  filterSelector,
  filterTextAtom,
  todoAtom,
} from "./store/atoms/todoAtom";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <RecoilRoot>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black", width: "100%" }}>
          <AddTodoForm />
          <Todos />
        </div>
        <div style={{ border: "1px solid black", width: "100%" }}>
          <FilterTodosBox />
          <TodosFiltered />
        </div>
      </div>
    </RecoilRoot>
  );
}

function AddTodoForm() {
  const setTodos = useSetRecoilState(todoAtom);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTodo() {
    setTodos((todos) => [...todos, { title, description }]);
  }

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

function Todos() {
  const todos = useRecoilValue(todoAtom);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function TodosFiltered() {
  return <></>;
}

function FilterTodosBox() {
  const [searchText, setSearchText] = useState("");
  console.log("rendered")

  const setfilterText = useSetRecoilState(filterTextAtom);

  const filteredTodos = useRecoilValue(filterSelector);

  function filterTodos() {
    setfilterText(searchText);
  }

  return (
    <>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <button onClick={filterTodos}>Filter Todos</button>
      <div>
        {filteredTodos?.map((todo) => (
          <>
            <h2>{todo.title}</h2>
            <span>{todo.description}</span>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
