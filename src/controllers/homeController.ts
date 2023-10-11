import { Request, Response } from 'express';
import Note from '../models/Note'

export const home = async (req:Request, res: Response)=>{
  const notes = await Note.find({})
  res.render('pages/home', {notes})
}