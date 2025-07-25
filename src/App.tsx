import "./App.css";
import EmployeeUI from "./pages/employee_ui";
import EmployeeIntegration from "./pages/employee_integration";
import Article from "./utils/articles";
import FavoriteCity from "./utils/favoriteCity";
import PaginatedCity from "./utils/paginatedCity";
import MovieList from "./utils/movieList";

import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/employee-ui" element={<EmployeeUI />} />
      <Route path="/employee" element={<EmployeeIntegration />} />
      <Route path="/articles" element={<Article />} />
      <Route path="/fav-city" element={<FavoriteCity />} />
      <Route path="/paginated-city" element={<PaginatedCity />} />
      <Route path="/movie-list" element={<MovieList />} />
    </Routes>
  );
}

export default App;