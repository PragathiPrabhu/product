// Requiring the module
const express = require('express');
const bodyPraser=require('body-parser');
const app = express();
const port=8080;
app.use(bodyPraser.json());

const productRouter=require("./router/product.router") 

// Route handling
app.use("/api/product",productRouter);

app.get('/', (req, res) => {
	res.send('<h2>Hello from Express.js server!!</h2>');
});

// Server setup
app.listen(port, () => {
	console.log('server listening on port 8080');
});
