import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, getUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE USER" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE USER" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE USER" });
});

export default userRouter;
