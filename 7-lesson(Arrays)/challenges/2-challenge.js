//Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20)
// and the faculty it is meant for. Write a few functions for working with it.
//- Display all the classrooms.
//- Display all the classrooms for a given faculty.
//- Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
//- A function for sorting all the classrooms by number of seats.
//- A function for sorting all the classrooms by name in alphabetical order.

const academyClassrooms = [
  { name: "Laboratory", seats: 19, faculty: "CIM" },
  { name: "Hall", seats: 13, faculty: "IMIT" },
  { name: "Chamber", seats: 18, faculty: "UA" },
  { name: "StudyRoom", seats: 15, faculty: "CIM" },
];

academyClassrooms.forEach((classrooms) => {
  console.log(
    `Name: ${classrooms.name}, seats: ${classrooms.seats}, faculty: ${classrooms.faculty}`
  );
});

let givenFaculty = prompt("Enter a faculty");
let found = false;

function findByFaculty() {
  console.log("Here are the classrooms by faculty name: " + givenFaculty);
  for (let classrooms of academyClassrooms) {
    if (classrooms.faculty == givenFaculty) {
      console.log(`${classrooms.name}`);
      found = true;
    }
  }
  if (!found) {
    console.log("We dont find any classrooms");
  }
}

findByFaculty();

let enterData = prompt("Enter the name, size and faculty");
let [nameData, sizeData, facultyData] = enterData.split(",");
let found2 = false;

function findByData() {
  for (let classrooms of academyClassrooms) {
    if ((classrooms.faculty == facultyData) & (classrooms.seats >= sizeData)) {
      console.log(
        `The group ${nameData} will fit in the ${classrooms.name} room`
      );
      found2 = true;
    }
  }
  if (!found2) {
    console.log("We dont find any classrooms by faculty or size");
  }
}

findByData();

academyClassroomsSortedBySeats = academyClassrooms.sort(
  (classSize1, classSize2) => classSize2.seats - classSize1.seats
);
console.log("Sorted classroms by seats number:");
academyClassroomsSortedBySeats.forEach((el) => {
  console.log(`${el.seats} seats in the ${el.name}`);
});

academyClassroomsSortedByAlphabet = academyClassrooms.sort(
  (className1, className2) => {
    return className1.name.localeCompare(className2.name);
  }
);
console.log("Sorted by alphabet");
academyClassroomsSortedByAlphabet.forEach((el) => {
  console.log(`${el.name}`);
});
