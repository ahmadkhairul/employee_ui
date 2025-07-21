import { useMemo, useState } from "react";
import { employeeKey, EmployeeData } from "../type/employee";
import { levelKey, Level } from "../type/level";

export function useFilter(employees: EmployeeData[]) {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [sortBy, setSortBy] = useState<keyof typeof employeeKey>("Name");
  const [sortType, setSortType] = useState<"Ascending" | "Descending">(
    "Ascending"
  );
  
  const data = useMemo(() => {
    let filtered = [...employees];

    if (search.trim()) {
      filtered = filtered.filter((item) =>
        (item.name + item.email).toLowerCase().includes(search.toLowerCase())
      );
    }

    if (level) {
      const _level = levelKey[level as keyof Level];
      filtered = filtered.filter((item) => item.level === _level);
    }

    if (sortBy && sortType) {
      const key = employeeKey[sortBy];

      filtered.sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];

        if (typeof aVal === "string" && typeof bVal === "string") {
          if (sortType === "Ascending") {
            return aVal.localeCompare(bVal);
          } else {
            return bVal.localeCompare(aVal);
          }
        }
        return 0;
      });
    }

    return filtered;
  }, [employees, search, level, sortBy, sortType]);

  return {
    search,
    setSearch,
    level,
    setLevel,
    sortBy,
    setSortBy,
    sortType,
    setSortType,
    data
  };
}
