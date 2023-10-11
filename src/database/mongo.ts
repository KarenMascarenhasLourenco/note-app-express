import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', false);

export const mongoConnect= async () =>{
  try{
    console.log('Conectando ao MongoDB')
    await mongoose.connect(process.env.MONGO_URL as string)
  } catch(err){
    console.log('Erro: '+ err)
  }
}