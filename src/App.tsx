import { Route, Routes } from "react-router-dom";

import TodoList from "@/pages/post";
import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TodoList />} path="/post" />
    </Routes>
  );
}

export default App;
