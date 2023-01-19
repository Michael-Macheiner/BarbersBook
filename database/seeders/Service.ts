import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Service from "App/Models/Service";

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  public async run() {
    const uniqueKey = 'id'
    await Service.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        description: 'Kurzhaarschnitt Mann',
        service_price: 20.00,
      },
      {
        id: 2,
        description: 'Langhaarschnitt Mann',
        service_price: 30.00
      },
      {
        id: 3,
        description: 'Kurzhaarschnitt Frau',
        service_price: 40.00
      },
      {
        id: 4,
        description: 'Langhaarschnitt Frau',
        service_price: 80.00
      }])
  }
}
