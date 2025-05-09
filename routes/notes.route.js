import express from 'express';
import { createNode, deleteNode, getUserFiles } from "../controllers/node.controller.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const router = express.Router();

// Create a new note
router.route("/create-node").post(authenticateUser, createNode);
router.route("/get-all-nodes").post(authenticateUser, getUserFiles);
router.delete("/delete-node/:id", authenticateUser, deleteNode);

export default router;