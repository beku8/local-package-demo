const express = require('express');
const app = express();

const dep1 = require('dep1');

app.set("port", process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send(dep1);
});

app.listen(app.get("port"), () => {
    console.log(`Express server running at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

