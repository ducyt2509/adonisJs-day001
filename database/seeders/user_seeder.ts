import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const users = [
      { name: 'user001', email: generateUniqueEmail(), age: 12, address: '123 Main St' },
      { name: 'user002', email: generateUniqueEmail(), age: 13, address: '123 Main St' },
      { name: 'user003', email: generateUniqueEmail(), age: 14, address: '123 Main St' },
      { name: 'user004', email: generateUniqueEmail(), age: 15, address: '123 Main St' },
      { name: 'user005', email: generateUniqueEmail(), age: 16, address: '123 Main St' },
      { name: 'user006', email: generateUniqueEmail(), age: 17, address: '123 Main St' },
      { name: 'user007', email: generateUniqueEmail(), age: 18, address: '123 Main St' },
      { name: 'user008', email: generateUniqueEmail(), age: 19, address: '123 Main St' },
      { name: 'user009', email: generateUniqueEmail(), age: 20, address: '123 Main St' },
      { name: 'user010', email: generateUniqueEmail(), age: 21, address: '123 Main St' },
      { name: 'user011', email: generateUniqueEmail(), age: 22, address: '123 Main St' },
      { name: 'user012', email: generateUniqueEmail(), age: 23, address: '123 Main St' },
      { name: 'user013', email: generateUniqueEmail(), age: 24, address: '123 Main St' },
      { name: 'user014', email: generateUniqueEmail(), age: 25, address: '123 Main St' },
      { name: 'user015', email: generateUniqueEmail(), age: 26, address: '123 Main St' },
      { name: 'user016', email: generateUniqueEmail(), age: 27, address: '123 Main St' },
      { name: 'user017', email: generateUniqueEmail(), age: 28, address: '123 Main St' },
      { name: 'user018', email: generateUniqueEmail(), age: 29, address: '123 Main St' },
      { name: 'user019', email: generateUniqueEmail(), age: 30, address: '123 Main St' },
      { name: 'user020', email: generateUniqueEmail(), age: 31, address: '123 Main St' },
      // Add more user data here
    ]

    function generateUniqueEmail() {
      const domain = 'example.com'
      const randomString = Math.random().toString(36).substring(2, 10)
      return `user${randomString}@${domain}`
    }

    await User.createMany(users)
  }
}
