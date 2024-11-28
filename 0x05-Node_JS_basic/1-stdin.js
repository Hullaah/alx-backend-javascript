console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', function reader(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  if (!this.isTTY) {
    console.log('This important software is now closing');
  }
  this.pause();
});
