import { connect, set } from "mongoose";
import { connectMongoose } from "./config";

let isConnected = false

export const dbConnect = async () => {
  if(isConnected) return

  set('strictQuery', true)
  connect(connectMongoose || '')
  .then(()=> {
    isConnected = true
    console.log('The database has connected')
  })
  .catch(()=> console.log('An error occurred'))
}