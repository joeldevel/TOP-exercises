const express = require("express");
const marked = require("marked");

const app = express();

const port = 3000;

const html = marked('# Marked in Node.js \n\nRendered by **marked**.');

app.get('/', (req, res) => {
	res.send(html);
})

app.listen(port, ()=> {
	console.log(`listening on localhost:${port}`);
});


