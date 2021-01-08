/*
// Assignment 1
let input = process.argv[2];

// You can also check, whether input is a number or not.
if (input) {
  let number = parseInt(input);
  console.log(number % 2 === 0 ? 'Even' : 'Odd');
} else {
  console.log('Please provide a number.');
}
// *****************************************************
*/

/*
// Assignment 2
const { add, sub, mul, div } = require('./calculator');

console.log(add(20, 2));
console.log(sub(20, 2));
console.log(mul(20, 2));
console.log(div(20, 2));

// *****************************************************
*/

/*
// Assignment 3
const fsp = require('fs').promises;
// Better if you use path module.

const createReadRenameDeleteOp = async () => {
  // Create a file
  await fsp.writeFile('./hello.txt', 'Hello World!');

  // Read a file
  const greetings = await fsp.readFile('./hello.txt', 'utf-8');
  console.log(greetings);

  // Rename a file
  await fsp.rename('./hello.txt', './message.txt');

  // Delete a file
  await fsp.unlink('./message.txt');
};

// You can use try, catch block for Error Handlings.
createReadRenameDeleteOp();
// *****************************************************
*/

/*
// Assignment 4
const fsp = require('fs').promises;

const showFileInformation = async () => {
  const stats = await fsp.stat('./calculator.js');
  console.log(stats);
  // Object that provides information about a file.
  console.log(stats.birthtime);
  // The timestamp indicating the creation time of this file.
  console.log(stats.atime);
  // The timestamp indicating the last time this file was accessed.
  console.log(stats.mtime);
  // The timestamp indicating the last time this file was modified.
  console.log(stats.size);
  // The size of the file in bytes.
  console.log(stats.isDirectory());
  // Returns true if this is a folder/directory.
  console.log(stats.isFile());
  // Returns true if this is a regular file.
};

showFileInformation();
// *****************************************************
*/

/*
// Assignment 5
const fs = require('fs').promises;

let showFilesAndFolders = async () => {
  const filesFolders = await fs.readdir('./products');
  console.log(filesFolders);
};

showFilesAndFolders();
// *****************************************************
*/

/*
// Assignment 6
const fs = require('fs').promises;

let showFiles = async () => {
  // If withFileTypes is set to true, the files array will contain fs.Dirent objects.
  const filesFolders = await fs.readdir('./products', { withFileTypes: true });
  // filter out the files
  const files = filesFolders.filter((file) => !file.isDirectory());
  console.log(files);
};

showFiles();
// *****************************************************
*/

/*
// Assignment 7
const fs = require('fs').promises;

let showFolders = async () => {
  // If withFileTypes is set to true, the files array will contain fs.Dirent objects.
  const filesFolders = await fs.readdir('./products', { withFileTypes: true });
  // filter out the folders by calling isDirectory method
  const folders = filesFolders.filter((file) => file.isDirectory());
  console.log(folders);
};

showFolders();
// *****************************************************
*/

/*
// Assignment 8

const fs = require('fs').promises;

const checkAFileExistsOrNot = async (fileName) => {
  try {
    await fs.access(`./${fileName}`);
    console.log('File/Folder exists');
  } catch (e) {
    console.log(`File/Folder don't exist`);
  }
};

const fileName = process.argv[2];
checkAFileExistsOrNot(fileName);

// *****************************************************
*/

/*
// Assignment 9

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Server is running at port: 8080');
  res.end();
});

server.listen(8080);

// *****************************************************
*/

/*
// Assignment 10

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/greetings') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from node.js' }));
  }
  res.writeHead(404, { 'content-type': 'text/plain' });
  res.end('404 - Not Found');
});
server.listen(8080);

// *****************************************************

*/
/*
// Assignment 11
const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
  const pageUrl = new URL(req.url, 'http://localhost:8080/');
  if (pageUrl.pathname === '/homepage') {
    const page = await fs.readFile(`./homepage.html`, 'utf-8');
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(page);
  }
  if (pageUrl.pathname === '/contactus') {
    const page = await fs.readFile(`./contactus.html`, 'utf-8');
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(page);
  }
  if (pageUrl.pathname === '/aboutus') {
    const page = await fs.readFile(`./aboutus.html`, 'utf-8');
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(page);
  }
  res.writeHead(404, { 'content-type': 'text/html' });
  res.end('<h1>Page not found</h1>');
});

server.listen(8080);

// *****************************************************
*/

/*
// Assignment 12
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

const chalk = require('chalk');
console.log(chalk.blue('Hello world'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.underline.bgRed('Hello world'));

// *****************************************************
*/
