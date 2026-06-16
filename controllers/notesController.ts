import type { Request, Response } from "express";
import Note from "../models/notesModel.ts";
import { string } from "zod";
// getting all notes
const getAllNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const { search } = req.query as { search?: string };

    const query = search ? { $text: { $search: search } } : {};

    const notes = await Note.find(query).sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";

    res.status(500).json({ message });
  }
};
// creating notes
const createNote = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, content } = req.body;
    // console.log(title, content);
    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error);
  }
};
// update notes

const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content } = req.body as {
      title?: string;
      content?: string;
    };

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true },
    );

    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }

    res.status(200).json(note);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export { getAllNotes, createNote, updateNote };
