import express from "express";
import usersController from "../controllers/users";

const router = express.Router();

router
  .get("/", usersController.getUsers)
  .get("/:id", usersController.getUserById)
  .post("/", usersController.addUser)
  .delete("/:id", usersController.deleteUser)
  .put("/:id", usersController.updateUser)
  .put("/add/:id", usersController.addOwnSalonToUser);

export default router;
