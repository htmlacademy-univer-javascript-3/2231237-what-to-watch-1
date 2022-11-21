export type Review = {
  id: number,
  text: string,
  date: string,
  rating: number,
  user: {
    id: number,
    name: string
  }
}
