let student = {
    Name: 'Akhil',
    Age: 26,
    Grade: 'A',
    updateGrade: function (newGrade){
        this.Grade = newGrade;
  }
};

// Normal Grades 
console.log(student);

// Updated Grades
student.updateGrade('B');
console.log(student);