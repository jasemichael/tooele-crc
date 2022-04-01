import Employee from './Employee'

export default interface Purchase {
  _id: string,
  item: string,
  date: Date,
  cost: number,
  authorizer: Employee,
  client_id: string
}
