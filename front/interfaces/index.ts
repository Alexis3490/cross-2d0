// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number,
  email: String,
  encryptedPassword:String,
  firstname:String,
  lastname:String,
  birthdate:Date|null
  gender:String
  createdAt:Date|null
  updatedAt:Date|null
}
