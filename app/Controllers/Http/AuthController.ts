import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import AuthValidator from "App/Validators/AuthValidator";

export default class AuthController {

  public async register({ request, response, auth }: HttpContextContract) {
    /*const userSchema = schema.create({
      firstname: schema.string({ trim: true }, [
        rules.minLength(2),
        rules.maxLength(50),
        rules.alpha(),
      ]),
      surname: schema.string({ trim: true }, [
        rules.minLength(2),
        rules.maxLength(50),
        rules.alpha(),
      ]),
      email: schema.string([rules.email(), rules.trim()]),
      password: schema.string([rules.minLength(8)]),
      is_email_verified: schema.boolean(),
    })*/

    console.log({
      body: request.body()
    })

    const data = await request.validate(AuthValidator)
    const user = await User.create(data)

    await auth.login(user)
    await user.sendVerifyEmail()

    return response.redirect().toPath('/')
  }


  public async login({ request, response, session, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      await auth.attempt(email, password)
    } catch (_error) {
      session.flash('errors', 'Email or password is incorrect')
      return response.redirect().back()
    }

    if (auth.user && session.has('isVerifyingEmail')) {
        // verify their email
        auth.user.isEmailVerified = true
        await auth.user.save()
    }

    return response.redirect().toPath('/')
  }


  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toPath('/')
  }
}
