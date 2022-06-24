abstract class Department {
  DepartmentName: string;
  constructor(_departmentName: string) {
    this.DepartmentName = _departmentName;
  }

  GetDepartmentName(): void {
    console.log("Department Name : " + this.DepartmentName);
  }
  abstract GetDepartmntFloor(floor: number): void;
}

class ITDepartment extends Department {
  constructor(_departmentName: string) {
    super(_departmentName);
  }

  GetDepartmntFloor(floor: number): void {
    return console.log("Floor : " + floor);
  }
}

let _ITDepartment = new ITDepartment("IT");

//_ITDepartment.DepartmentName = "IT";
_ITDepartment.GetDepartmentName();
_ITDepartment.GetDepartmntFloor(5);
