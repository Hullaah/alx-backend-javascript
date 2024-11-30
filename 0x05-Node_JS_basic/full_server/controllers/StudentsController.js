import { dirname } from 'path';
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    response.write('This is the list of our students');
    readDatabase(process.argv[2])
      .then((studentFields) => {
        const orderedStudentFields = Object.entries(studentFields).sort((a, b) => {
          const x = a[0].toLowerCase();
          const y = b[0].toLowerCase();
          return x.localeCompare(y);
        });
        orderedStudentFields.forEach((studentField) => {
          response.write(`\nNumber of students in ${studentField[0]}. `);
          response.write(`List: ${studentField[1].join(', ')}`);
        });
        response.end();
      })
      .catch(() => response.status(500).end('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
    }
    readDatabase(`${dirname(__dirname)}/database.csv`)
      .then((studentFields) => {
        response.end(`List: ${studentFields[major].join(', ')}`);
      })
      .catch(() => response.status(500).end('Cannot load the database'));
  }
}
