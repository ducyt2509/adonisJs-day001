import { LucidModel, ModelAttributes } from '@adonisjs/lucid/types/model'
import { Data } from '../constants/constants.js'

export class BaseService<T extends LucidModel> {
  constructor(private model: T) { }

  async pagination(page: number, perPage: number, query?: any): Promise<Data<InstanceType<T>>> {
    let result

    if (query) {
      result = await this.model.query().where(query).paginate(page, perPage)
    } else {
      result = await this.model.query().paginate(page, perPage)
    }

    const { total } = result.getMeta()

    if (total / perPage < page) {
      throw new Error('Page is not available')
    }

    return {
      data: result.all() as InstanceType<T>[],
      pagination: {
        total,
        perPage,
        page,
      },
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
