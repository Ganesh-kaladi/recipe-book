import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Category from "./pages/Category";
import StartItem from "./pages/StartItem";
import Origin from "./pages/Origin";
import List from "./pages/List";
import Item from "./pages/Item";
import Search from "./component/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to={"search"} replace />} />
        <Route path="categories" element={<Category />} />
        <Route path="start-items" element={<StartItem />} />
        <Route path="origin" element={<Origin />} />
        <Route path="list" element={<List />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
