const config = require("./config.json");
if (config.database == "sqlite3") {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database(config.dir);
} else {
    console.error("Database not supported at this time, sorry.")
    process.exit();
}