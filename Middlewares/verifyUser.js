const todoModal = require("../Model/todo");
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  const token = req.headers["token"]?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Invalid token" });

  const id = req.params;

  try {
    const todo = todoModal.findOne({ _id: id });

    const decoded = jwt.verify(token, JWT_SECRET);

    if (todo.userId === decoded.userId) {
      return next();
    }

    res.status(403).json({ message: "Your are not allowed to access this" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = verifyUser;
