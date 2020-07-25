var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ek1colagoney",
  database: "top_songsdb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    initialPrompts();
  });

function initialPrompts() {
    inquirer
    .prompt([
        {
            name: "action",
            message: "What do you want to do?",
            type: "list",
            choices: [
                "ARTIST SEARCH",
                "MULTI SEARCH",
                "RANGE SEARCH",
                "SONG SEARCH",
                "EXIT"
            ]
        }
    ])
    .then
}

function artistSearch() {
    console.log("Artist search...")
    initialPrompts()
}

function multiSearch() {
    console.log("Multi search...")
    initialPrompts()
}

function rangeSearch() {
    console.log("Range search...")
    initialPrompts()
}

function songSearch() {
    console.log("Song search...")
    initialPrompts()
}