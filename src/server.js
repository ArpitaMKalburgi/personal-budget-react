// Budget API
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(cors()); // Use cors() as a middleware function.

// app.use('/', express.static('public'));
app.use('/bug', express.static('budget_data.json'));

// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/budget', (req, res) => {
    fs.readFile('budget_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while reading budget data.' });
        } else {
            const budgetData = JSON.parse(data);
            res.json(budgetData);
        }
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
