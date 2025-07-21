import { EmployeeData, employeeKey } from "../type/employee";
import { useEmployee } from "../hooks/useEmployee";
import { useFilter } from "../hooks/useFilter";

const App = () => {
  const { employees, isLoading, error } = useEmployee();

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
  } = useFilter(employees as EmployeeData[]);

  return (
    <>
      <h1>Employee List</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
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
            <option value="">-- Filter by level --</option>
            <option>Junior</option>
            <option>Middle</option>
            <option>Senior</option>
            <option>Associate</option>
            <option>VP</option>
          </select>
          <select
            name="sortBy"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as keyof typeof employeeKey)
            }
          >
            <option value="">-- Sort by --</option>
            {Object.keys(employeeKey).map((key) => (
              <option key={key}>{key}</option>
            ))}
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
                <tr key={item.id}>
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
      )}
    </>
  );
};

export default App;
