// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const db = require('./db')

const bookRoute = require('./routes/book.route')
const userRoute = require('./routes/user.route')
const transactionRoute = require('./routes/transaction.route')
// const show_DB = db.get('listBooks').value()

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render("index.pug");
});

app.use("/bookStore", bookRoute)
app.use("/users", userRoute)
app.use("/transaction", transactionRoute)

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
