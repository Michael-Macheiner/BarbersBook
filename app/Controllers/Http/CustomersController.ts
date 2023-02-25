import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Roles from 'App/Enums/Roles'



export default class CustomersController {
  public async index({ inertia }: HttpContextContract) {
    const users = await User.query()
    console.log(users)
    return inertia.render('Customers', { users });
  }


  public async manage({ view }: HttpContextContract) {
    const users = await User.query()
      .orderBy('email')

    const roles = await Role.query()
      .orderBy('name')

    return view.render('users/manage', { users, roles })
  }

  public async role({ request, response, params, auth }: HttpContextContract) {
    const roleSchema = schema.create({
      roleId: schema.number([rules.exists({ table: 'roles', column: 'id' })])
    })

    const data = await request.validate({ schema: roleSchema })
    const user = await User.findOrFail(params.id)
    const isAuthUser = user.id === auth.user?.id

    await user.merge(data).save()

    return isAuthUser && user.roleId !== Roles.ADMIN
      ? response.redirect().toPath('/')
      : response.redirect().back()
  }

  public async deleteUser({ response, params, auth }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const isAuthUser = user.id === auth.user?.id

    await user.delete()

    return isAuthUser
      ? response.redirect().toPath('/')
      : response.redirect().back()
  }

  public async createUser({ inertia, request }: HttpContextContract) {

    const userSchema = schema.create({
      firstname: schema.string({ trim: true }, [
        rules.minLength(2),
        rules.maxLength(50),

      ]),
      surname: schema.string({ trim: true }, [
        rules.minLength(2),
        rules.maxLength(50),
      ]),
      email: schema.string([rules.email(), rules.trim()]),
      password: schema.string([rules.minLength(8)]),
      is_email_verified: schema.boolean(),
    })

    //const data = await request.validate({ schema: userSchema })
    //const user = await User.create(data)

    const users = await User.query()

    return inertia.render('Customers', { users });
  }
}
