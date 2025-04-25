import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: "Get all subscriptions" });
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: "Get subscriptions details" });
});

subscriptionRouter.post('/', (req, res) => {
    res.send({ title: "Create subscriptions" });
});

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: "Update subscriptions" });
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: "Delete all subscriptions" });
});

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: "Get all users subscriptions" });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: "Cancel subscriptions" });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;