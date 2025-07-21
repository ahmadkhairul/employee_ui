import { useEffect, useState } from "react";
import { EmployeeData } from "../type/employee";
import { errorHandler } from "../utils/errorHandler";

const API_URL =
  import.meta.env.VITE_APP_EMPLOYEE_API ||
  "http://localhost:3000/api/v1/employee";

export const useEmployee = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data: EmployeeData[] = await res.json();
        setEmployees(data);
      } catch (err: unknown) {
        errorHandler(err, setError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    employees,
    isLoading,
    error,
    setEmployees,
  };
};
