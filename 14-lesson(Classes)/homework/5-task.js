//Create a class called Student with a constructor that takes name,
//age, and grade as parameters. Add a method called study that logs
//a message indicating the student is studying.

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  study() {
    return `${this.name} is studying in the ${this.grade} form.`;
  }
}

const student = new Student("John", 18, 12);
console.log(student.study());
