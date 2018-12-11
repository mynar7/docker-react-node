const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/users', function(req, res) {
    res.json([
        "Sally",
        "Bernie",
        "Robbie",
    ]);
});

app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT);
});