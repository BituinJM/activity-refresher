import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "2015-105867",
    "BSIT",
    "CCS",
    "John Michael",
    20,
    "MALE",
    "BINANGONAN RIZAL"
);

const student2 = new Student(
    "2015-105868",
    "BSIT",
    "CCS",
    "Carlo",
    20,
    "MALE",
    "Angono Rizal"
);

const student3 = new Student(
    "2015-105869",
    "BSCPE",
    "CEIT",
    "Jhon Rhay",
    20,
    "MALE",
    "PASAY CITY"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);

//console.log(studentList.getStudents());
// console.log("*************");
// console.log(studentList.updateStudentName("2015-105869", "Michael Jordan"));
// console.log("*************");
console.log(studentList.updateStudentAge("2015-105867", 27));
console.log(studentList.updateStudentAge("2015-105868", 22));
console.log(studentList.updateStudentAge("2015-105869", 25));
// console.log(studentList.checkStudentId("2015-105870"));
//console.log(studentList.getStudents());
