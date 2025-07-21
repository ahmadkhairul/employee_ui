import "./App.css";
import EmployeeUI from "./pages/employee_ui";
import EmployeeIntegration from "./pages/employee_integration";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/employee-ui" element={<EmployeeUI />} />
      <Route path="/employee" element={<EmployeeIntegration />} />
    </Routes>
  );
}

export default App;