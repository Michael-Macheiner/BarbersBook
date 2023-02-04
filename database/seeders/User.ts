import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from "App/Models/User";

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']
  public async run () {
    const uniqueKey = 'id'
    await User.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        firstname: 'Max',
        surname: 'Mustermann',
        email: 'maxmustermann@gmail.com',
        password: '12345678'
      },
      {
        id: 2,
        firstname: 'Giulio',
        surname: 'Lo Iacono',
        email: 'giuls@gmail.com',
        password: 'pizzapasta'
      }
    ])

  }
}
