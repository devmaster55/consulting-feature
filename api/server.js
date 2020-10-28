const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const data = require('./data/campaigns.json')
const cors = require('cors');
const {sortData} = require('./helperFunctions/sortData')
const {newCampaign, editCampaign} = require('./helperFunctions/writeToFIle')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/data', function (req, res) {
    res.send(sortData(data));
});

app.post('/createcampaign', (req, res) => {
    newCampaign(req, data.length);
})

app.post('/editCampaign', (req, res) => {
    editCampaign(req);
})


app.listen(8080);