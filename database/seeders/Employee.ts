import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from "App/Models/Employee";
import validator from "validator";
import toDate = validator.toDate;

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']
  public async run () {
    const uniqueKey = 'id'
    await Employee.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        employee_since: toDate('2020-10-10'),

    }])
  }

}
