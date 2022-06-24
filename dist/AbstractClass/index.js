class Department {
    constructor(_departmentName) {
        this.DepartmentName = _departmentName;
    }
    GetDepartmentName() {
        console.log("Department Name : " + this.DepartmentName);
    }
}
class ITDepartment extends Department {
    constructor(_departmentName) {
        super(_departmentName);
    }
    GetDepartmntFloor(floor) {
        return console.log("Floor : " + floor);
    }
}
let _ITDepartment = new ITDepartment("IT");
//_ITDepartment.DepartmentName = "IT";
_ITDepartment.GetDepartmentName();
_ITDepartment.GetDepartmntFloor(5);
