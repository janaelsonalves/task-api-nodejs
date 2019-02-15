const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", (req, res) => {
  taskController.getTasks(req, res);
});

router.get("/tasks/:id", (req, res) => {
  taskController.getOneTask(req, res);
});

module.exports = router;
