const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");




router.post("/addUsers",usersController.addUsers);
router.get("/getUsers",usersController.getUsers);
router.put("/updateUsers",usersController.updateUsers);
router.delete("/deleteUsers/:id",usersController.deleteUsers);
router.get("/searchUsers/:id",usersController.searchUsers);

module.exports = router;
