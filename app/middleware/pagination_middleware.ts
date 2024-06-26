import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class PaginationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const query = ctx.request.qs()
    query.page = !query.page || (query.page && !Number(query.page)) ? 1 : Number(query.page)
    query.perPage =
      !query.perPage || (query.perPage && !Number(query.perPage)) ? 10 : Number(query.perPage)

    ctx.request.updateQs(query)
    return await next()
  }
}
