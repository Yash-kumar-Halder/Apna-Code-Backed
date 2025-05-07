import { Node } from "../models/node.model.js";

export const createNode = async (req, res) => {
    try {
        const { name, type, parentId, content } = req.body;
        const userId = req.user.id;

        const newNode = await Node.create({
            name,
            type,
            parentId: parentId || null,
            userId,
            content: type === "file" ? content : undefined,
        });

        res.status(201).json(newNode);
    } catch (error) {
        res.status(500).json({ message: "Failed to create node", error });
        console.log(error);
        
    }
};

export const getUserFiles = async (req, res) => {
    try {
        const userId = req.user.id; // Get user id from the auth header (middleware)

        // Fetch all nodes for the user
        const files = await Node.find({ userId })
            .populate("parentId", "_id") // Populate only the _id field of the parentId to avoid getting the full parent node
            .exec();

        res.status(200).json({ files });
    } catch (error) {
        console.error("Error fetching user files:", error);
        res.status(500).json({ message: "Error fetching user files", error });
    }
};



