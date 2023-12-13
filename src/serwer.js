const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Konfiguracja połączenia z bazą danych
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'exampledbflask'
});

// Połącz z bazą danych
db.connect();

// Endpoint do pobierania danych
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM your_table', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
