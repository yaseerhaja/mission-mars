const cors  = require('cors');

const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));
app.use(express.static('assets'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));


const api = require('./api-routes');
app.use('/api/', api);

app.use('/assets/', express.static(path.join(__dirname, 'assets')))


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });