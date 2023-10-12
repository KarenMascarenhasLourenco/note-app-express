import { Request, Response } from 'express';
import Note from '../models/Note'

export const home = async (req:Request, res: Response)=>{
  const notes = await Note.find({})
  res.render('pages/home', {notes})
}

export const novaNota = async (req:Request, res: Response) => {
  const {title, content} = req.body
  const note = new Note();
  note.title=title; 
  note.content=content; 
  note.usefull=true;
  try{
    note.save();
    console.log('Nota Salva')
    res.redirect('/')
  }catch(err){
    console.log('Error: '+err)
  }
}