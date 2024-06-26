import User from '#models/user'
import { BaseService } from './base_service.js'

class UserService extends BaseService<typeof User> {
  constructor() {
    super(User)
  }
}

export default new UserService()
