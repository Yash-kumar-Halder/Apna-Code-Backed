import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
    {
        title: String,
        links: [String],
        tags: [String],
        notes: String,
        code: String, // single code block as a string
    },
    { _id: false }
);

const nodeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["folder", "file"], required: true },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Node",
        default: null,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: contentSchema, // optional, only for files
});

export const Node = mongoose.model("Node", nodeSchema);
