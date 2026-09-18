const express = require('express');
const path = require('node:path');
const {error} = require('node:console');
const indexRouter = require('./routes/indexRouter');

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);

const PORT = 8080;
app.listen(PORT, (error) =>{
  if(error) throw error;
  console.log(`Express is running at port: ${PORT}`);
})