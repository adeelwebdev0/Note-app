import express, { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
} from "../controllers/notesController.ts";
const router = express.Router();
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);

export default router;
