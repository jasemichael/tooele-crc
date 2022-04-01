import Employee from './Employee'

export default interface Note {
  _id: string,
  title: string,
  date: Date,
  author: Employee,
  description: string,
  client_id: string
}
