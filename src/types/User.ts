export default interface User {
  _id: string,
  first_name: string,
  last_name: string,
  email?: string,
  password?: string,
  photo_url?: string,
  role?: 'admin' | 'employee'
}
