export interface Employee {
  Name: string;
  Email: string;
  Level: string;
  Department: string;
  "Joined At": string;
  Status: string;
  Location: string;
}

export type EmployeeData = {
  id: number;
  name: string;
  email: string;
  level: string;
  department: string;
  joined_at: string;
  status: string;
  location: string;
};

export const employeeKey: Record<keyof Employee, keyof EmployeeData> = {
  Name: "name",
  Email: "email",
  Level: "level",
  Department: "department",
  "Joined At": "joined_at",
  Status: "status",
  Location: "location",
};
