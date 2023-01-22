// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CalendarController {
  public async index({ inertia }) {
    return inertia.render('Calendar');
  }
}
