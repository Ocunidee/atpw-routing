import { Book } from './book'

export interface AuthorDetail {
  id: number
  name: string
  nationality: string
  birthYear: string
  books: Book[]
}
