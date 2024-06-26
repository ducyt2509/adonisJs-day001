import { LucidModel, ModelAttributes } from '@adonisjs/lucid/types/model'
import { Data } from '../constants/constants.js'
// import { Data } from '../constants/constants.js'

export class BaseService<T extends LucidModel> {
  constructor(private model: T) { }

  //: Promise<Data<T>>
  async pagination(page: number, perPage: number, query?: any): Promise<Data<T>> {
    let result = null
    if (query) {
      result = await this.model.query().paginate(page, perPage)
    } else {
      result = await this.model.query().paginate(page, perPage)
    }
    return {
      data: result.all(),
      pagination: result.getMeta(),
    }
  }

  async create(data: Partial<ModelAttributes<InstanceType<T>>>) {
    return this.model.create(data)
  }

  async update(id: number, data: Partial<ModelAttributes<InstanceType<T>>>) {
    const model = (await this.model.find(id)) as InstanceType<T> | null
    if (model) {
      model.merge(data)
      await model.save()
    }
    return model
  }

  async delete(id: number) {
    const model = (await this.model.find(id)) as InstanceType<T> | null
    if (model) {
      await model.delete()
    }
    return model
  }
}
