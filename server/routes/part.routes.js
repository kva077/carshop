const express = require("express");
const Part = require("../models/Part");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");

// api/parts
router
    .route("/")
    .get(async (req, res) => {
        try {
            const list = await Part.find();
            res.send(list);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    })
    .put(auth, async (req, res) => {
        try {
            const newPart = await Part.create({
                ...req.body
            });
            res.status(201).send(newPart);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    });

router
    .delete("/:partId", auth, async (req, res) => {
        try {
            const { partId } = req.params;
            await Part.find({ _id: partId }).remove();
            return res.send(null);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    })
    .patch("/:partId", auth, async (req, res) => {
        try {
            const { partId } = req.params; //достаем юзер айди

            if (partId === req.body._id) {
                const updatedPart = await Part.findByIdAndUpdate(
                    partId,
                    req.body,
                    {
                        new: true
                    }
                );
                res.send(updatedPart);
            } else {
                res.status(401).json({ message: "Unauthorized" });
            }
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    });

module.exports = router;
