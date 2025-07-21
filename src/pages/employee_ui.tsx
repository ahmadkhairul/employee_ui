import dummyData from "../data/employee.json";
import { Employee, EmployeeData } from "../type/employee";
import { useFilter } from "../hooks/useFilter";

function App() {
  
  const {
    data,
    search,
    setSearch,
    level,
    setLevel,
    sortBy,
    setSortBy,
    sortType,
    setSortType,
  } = useFilter(dummyData as EmployeeData[]);

  return (
    <>
      <h1>Employee List</h1>
      <input
        type="text"
        name="search"
        placeholder="Search name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        name="level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option></option>
        <option>Junior</option>
        <option>Middle</option>
        <option>Senior</option>
        <option>Associate</option>
        <option>VP</option>
      </select>
      <select
        name="sortBy"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as keyof Employee)}
      >
        <option></option>
        <option>Name</option>
        <option>Email</option>
        <option>Level</option>
        <option>Department</option>
        <option>Joined At</option>
        <option>Status</option>
        <option>Location</option>
      </select>
      <select
        disabled={!sortBy}
        name="sortType"
        value={sortType}
        onChange={(e) =>
          setSortType(e.target.value as "Ascending" | "Descending")
        }
      >
        <option>Ascending</option>
        <option>Descending</option>
      </select>
      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Level</td>
            <td>Department</td>
            <td>Joined At</td>
            <td>Status</td>
            <td>Location</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.level}</td>
              <td>{item.department}</td>
              <td>{item.joined_at}</td>
              <td>{item.status}</td>
              <td>{item.location}</td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={8}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
