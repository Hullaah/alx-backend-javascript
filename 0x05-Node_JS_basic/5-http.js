const http = require('node:http');
const fs = require('node:fs');

function countStudents(path, outStream) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const arr = data.split('\n').filter((element) => element !== '');
    const fields = arr[0].split(',');
    const students = [];

    for (const element of arr.slice(1)) {
      const student = {};
      const values = element.split(',');
      for (let i = 0; i < fields.length; i += 1) {
        student[fields[i]] = values[i];
      }
      students.push(student);
    }

    outStream.write(`Number of students: ${students.length}\n`);
    const studentFields = new Set();
    students.forEach((student) => studentFields.add(student.field));

    for (const field of studentFields) {
      const studentsOfField = students.filter((student) => student.field === field)
        .map((student) => student.firstname);
      outStream.write(`Number of students in ${field}: ${studentsOfField.length}. List: ${studentsOfField.join(', ')}\n`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2], res);
    res.end();
  }
});

app.listen(1245);

module.exports = app;
