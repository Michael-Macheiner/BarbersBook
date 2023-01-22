//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import User from 'App/Models/User'


export default class CustomersController {
  public async index({ inertia }) {
    //const customers = await User.all()
    return inertia.render('Customers');
  }
}
