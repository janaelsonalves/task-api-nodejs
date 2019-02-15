const express = require("express");
const bodyParser = require("body-parser");
const taskRouter = require("./routes/taskRouter");

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use("/api/v1", taskRouter);

app.get("/", (req, res) => {
  res.send("API works!");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
