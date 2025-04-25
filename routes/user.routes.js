import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({ title: "Get all users" });
});

userRouter.get('/:id', (req, res) => {
    res.send({ title: "Get user details" });
});

userRouter.post('/', (req, res) => {
    res.send({ title: "CREATE USER" });
});

userRouter.put('/:id', (req, res) => {
    res.send({ title: "UPDATE USER" });
});

userRouter.delete('/:id', (req, res) => {
    res.send({ title: "DELETE USER" });
});

export default userRouter;