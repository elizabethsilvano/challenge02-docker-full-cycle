const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'fullcycle'
});

connection.connect();

app.get('/', (req, res) => {
    connection.query('INSERT INTO people(name) VALUES ("Random")', (err, result) => {
        if (err) throw err;

        connection.query('SELECT name FROM people', (err, results) => {
            if (err) throw err;

            res.send('<h1>Full Cycle Rocks!</h1>' + results.map(person => `<h2>${person.name}</h2>`).join(''));
        });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
