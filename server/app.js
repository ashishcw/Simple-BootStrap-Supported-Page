const express = require('express');

const app = express();
const port = 5000;

//File refrencing
app.use(express.static('../client'));

//app.set('views', '../client/index.html');

app.listen(port, ()=> console.log(`Listening the app on port : ${port}`));
