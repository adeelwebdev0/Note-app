import express, { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  getNoteById,
} from "../controllers/notesController.ts";
const router = express.Router();
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.get("/:id", getNoteById);

export default router;
