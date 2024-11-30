import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    response.send('This is the list of our students\n');
    readDatabase('/database.csv')
      .then((studentFields) => {
        console.log(`studentFields: ${studentFields}`);
        const orderedStudentFields = Object.keys(studentFields).sort((a, b) => {
          const x = a[0].toLowerCase();
          const y = b[0].toLowerCase();
          if (x === y) {
            return 0;
          }
          if (x < y) {
            return -1;
          }
          return 1;
        });
        orderedStudentFields.forEach((studentField) => {
          response.send(`Number of students in ${studentField[0]}.`);
          response.send(`List: ${studentField[1].join(', ')}`);
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
    readDatabase('/database.csv')
      .then((studentFields) => {
        response.end(`List: ${studentFields[major].join(', ')}`);
      })
      .catch(() => response.status(500).end('Cannot load the database'));
  }
}
