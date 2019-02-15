var tasks = [
  {
    id: 1,
    title: "Node JS API",
    description: "Create a Node JS Restful API",
    done: false
  },
  {
    id: 2,
    title: "PHP Restul API",
    description: "Let's create a PHP Restful API",
    done: false
  },
  {
    id: 3,
    title: "Python Restful API",
    description: "Let's create a Python Restful API",
    done: false
  },
  {
    id: 4,
    title: "Java Restful API",
    description: "Let's create a Java Restful API",
    done: false
  }
];

exports.saveTask = async function(req, res) {
  res.status(200).json({});
};

exports.getTasks = async function(req, res) {
  res.status(200).json(tasks);
};

exports.getOneTask = async function(req, res) {
  let taskId = parseInt(req.params.id);
  console.log("Param id", taskId);
  let task = tasks.filter(task => {
    return task.id === taskId;
  });
  res.status(200).json(task[0]);
};

exports.deleteTask = function(req, res) {
  res.status(200).json({});
};

exports.updateTask = function(req, res) {
  res.status(200).json({});
};
