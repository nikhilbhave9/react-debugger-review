const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
        console.log('Reached server!');
        res.json({ message: 'Hello from the server!' });
    }
);

app.listen(5000, () => {
    console.log('Server is up on port 5000.');
});
