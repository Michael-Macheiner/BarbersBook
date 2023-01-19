import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from "App/Models/Category";

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']
  public async run() {
    const uniqueKey = 'id'
    await Category.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        description: 'Männerhaarschnitt'
      },
      {
        id: 2,
        description: 'Frauenhaarschnitt'
      }])
  }
}
