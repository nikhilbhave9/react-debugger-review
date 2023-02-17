const express = require('express');
const axios = require('axios');
const moment = require('moment');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    console.log('Reached server!');
    res.json({ message: 'Hello from the server!' });
}
);

const bugzillaUrl = 'https://bugzilla.mozilla.org';
const bugEndpoint = '/rest/bug';

// Middleware to set the response Content-Type header to JSON
app.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

app.get('/bug', async (req, res) => {
    console.log('Reached server!');
    const { date } = req.query;
    const queryParams = {
        last_change_time: moment(date).format('YYYY-MM-DD'),
        op_sys: 'Windows XP',
    };
    console.log(bugzillaUrl + bugEndpoint + '?' + new URLSearchParams(queryParams).toString());
    try {
        const response = await axios.get(bugzillaUrl + bugEndpoint, { params: queryParams });
        const bugs = response.data.bugs;
        res.json(bugs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching bugs from Bugzilla' });
    }
});

app.listen(5000, () => {
    console.log('Server is up on port 5000.');
});
