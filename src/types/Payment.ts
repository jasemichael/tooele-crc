import Employee from './Employee'
import Job from './Job'

export default interface Payment {
  _id: string,
  job: Job,
  date: Date,
  authorizer: Employee,
  client_id: string
}
