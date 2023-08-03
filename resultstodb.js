const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'trace',
  password: 'Mj2002dr%',
  database: 'results'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
test_02 = {}
fs.readFile('Results.txt', 'utf8', (err, data) => {
    let lines = data.split('\n'); 
    test = JSON.parse(lines[1]);
    for (let i = 0; i < lines.length-1; i++) {
        let line = JSON.parse(lines[i]);
        console.log(line);
        
        const sqll = 'INSERT INTO tests (name, address, occupants, postcode) VALUES (?, ?, ?, ?)';
        const values = [line.name, line.address, JSON.stringify(line.occupants), line.postcode];
        connection.query(sqll, values, (err, result) => {
            if (err) {
                console.error('Error inserting data: ', err);
            } else {
                console.log('Data inserted successfully!');
            }
        });        
    }
   
  });

  const sql = `
  CREATE TABLE IF NOT EXISTS tests(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    occupants TEXT,
    postcode VARCHAR(255)
  )
`;

connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating table: ', err);
    } else {
      console.log('Table created successfully!');
    }
  });
