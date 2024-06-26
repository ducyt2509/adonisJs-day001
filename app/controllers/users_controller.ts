import { inject } from '@adonisjs/core'
import { HttpContext, ResponseStatus } from '@adonisjs/core/http'
import UserService from '#services/user_service'

@inject()
export default class UsersController {
  async index({ response }: HttpContext) {
    const data = await UserService.pagination(1, 1)
    

  }
}
