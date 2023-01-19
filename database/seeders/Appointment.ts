import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Appointment from "App/Models/Appointment";
import {DateTime} from "luxon";

export default class extends BaseSeeder {
  public static environment = ['development','testing']
  public async run () {
    const uniqueKey = 'id'
    await Appointment.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        date: DateTime.local(),
        employeesID: 1,
        customerID: 1,
        categoriesID: 1,
        serviceID: 2,
        remarks: 'Everything good!'
      }])

  }
}
