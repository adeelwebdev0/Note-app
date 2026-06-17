import express, { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  getNoteById,
  deleteNote,
} from "../controllers/notesController.ts";
const router = express.Router();
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);

export default router;
