import { inject } from '@adonisjs/core'
import { HttpContext, ResponseStatus } from '@adonisjs/core/http'
import UserService from '#services/user_service'

@inject()
export default class UsersController {
  async index({ request, response }: HttpContext) {
    const { page, perPage } = request.qs()
    const { data, pagination } = await UserService.pagination(page, perPage)
    response.status(ResponseStatus.Ok).json({
      statusCode: ResponseStatus.Ok,
      message: 'User list',
      data,
      pagination,
    })
  }
}
