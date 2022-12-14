export type Film = {
  id: number | null,
  name: string,
  description: string,
  releaseYear: number,
  genre: string,
  rating: number,
  scoreCount: number,
  starring: string[],
  posterImage: string,
  previewImage: string,
  director: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  runTime: number,
  isFavourite: boolean
}
