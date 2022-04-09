export default interface Client {
  _id: string,
  first_name: string,
  last_name: string,
  balance: number,
  phone_number: string,
  photo_url?: string,
}
