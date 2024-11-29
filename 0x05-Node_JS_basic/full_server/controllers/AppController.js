export default class AppController {
  static getHomePage(request, response) {
    response.send('Hello Holberton School!');
  }
}
