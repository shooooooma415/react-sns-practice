import { Route, Routes } from "react-router-dom";

import TodoList from "@/pages/postTodo";
import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TodoList />} path="/todo" />
    </Routes>
  );
}

export default App;
