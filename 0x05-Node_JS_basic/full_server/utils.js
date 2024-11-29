import fs from 'node:fs/promises';

export default async function readDatabase(path) {
  const contents = await fs.readFile(path, 'utf8');
  const arr = contents.split('\n').filter((element) => element !== '');
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

  const fieldSet = new Set();
  const studentFields = {};
  students.forEach((student) => {
    if (fieldSet.has(student.field)) {
      studentFields[student.field].push(student.firstname);
    } else {
      studentFields[student.field] = [student.firstname];
      fieldSet.add(student.field);
    }
  });
  return studentFields;
}
