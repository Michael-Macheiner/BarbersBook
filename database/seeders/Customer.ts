import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from "App/Models/Customer";
import validator from "validator";
import toDate = validator.toDate;

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']
  public async run () {
    const uniqueKey = 'id'
    await Customer.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        customer_since: toDate('2020-10-10')
    }])
  }
}
