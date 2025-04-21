import { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data/employee.json";

const sortTypeKey: Record<string, string> = {
  Name: "name",
  Email: "email",
  Level: "level",
  Department: "department",
  "Joined At": "joined_at",
  Status: "status",
  Location: "location",
};

const levelKey: Record<string, string> = {
  Junior: "junior",
  Middle: "middle",
  Senior: "senior",
  Associate: "associate",
  VP: "vice president",
};

function App() {
  const [data, setData] = useState(dummyData);
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    filterAndSortData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, level, sortBy, sortType]);

  const filterAndSortData = () => {
    let filtered = [...dummyData];

    if (search.trim()) {
      filtered = filtered.filter((item) =>
        (item.name + item.email).toLowerCase().includes(search.toLowerCase())
      );
    }

    if (level) {
      let _level = levelKey[level]
      filtered = filtered.filter((item) => item.level === _level);
    }

    if (sortBy && sortType) {
      const key = sortTypeKey[sortBy];

      filtered.sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];

        if (sortType === "Ascending") {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
    }

    setData(filtered);
  };

  return (
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
        onChange={(e) => setSortBy(e.target.value)}
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
        onChange={(e) => setSortType(e.target.value)}
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
            <tr>
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
        </tbody>
      </table>
    </>
  );
}

export default App;
