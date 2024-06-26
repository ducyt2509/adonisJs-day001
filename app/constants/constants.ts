import { LucidRow } from '@adonisjs/lucid/types/model'

export type Data<T> = {
  data: LucidRow[] | LucidRow,
  pagination: {
    total: number
    perPage: number
    page: number
    lastPage: number
  }
}
