import { Schema, model, connection, Model } from 'mongoose'

type NoteType ={
  title:string,
  content:string,
  usefull: boolean
}

const schema = new Schema<NoteType>({
  title:String,
  content:String,
  usefull:Boolean
})

const modelName:string= 'Note';

export default (connection && connection.models[modelName] ?
  connection.models[modelName] as Model<NoteType> :
  model<NoteType>(modelName, schema) 
)