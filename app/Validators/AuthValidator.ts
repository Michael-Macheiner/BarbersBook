import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    firstname: schema.string({ trim: true }, [
      rules.required(),
      rules.minLength(2),
      rules.maxLength(50),
      rules.alpha(),
    ]),
    surname: schema.string({ trim: true }, [
      rules.required(),
      rules.minLength(2),
      rules.maxLength(50),
      rules.alpha(),
    ]),
    email: schema.string({ trim: true }, [rules.email()]),
    password: schema.string({}, [rules.minLength(8)]),
    is_email_verified: schema.boolean()
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'firstname.required': 'Vorname ist erforderlich',
    'firstname.minLength': 'Vorname muss mindestens 2 Zeichen lang sein',
    'firstname.maxLength': 'Vorname darf maximal 50 Zeichen lang sein',
    'firstname.alpha': 'Vorname darf nur Buchstaben enthalten',

    'surname.required': 'Nachname ist erforderlich',
    'surname.minLength': 'Nachname muss mindestens 2 Zeichen lang sein',
    'surname.maxLength': 'Nachname darf maximal 50 Zeichen lang sein',
    'surname.alpha': 'Nachname darf nur Buchstaben enthalten',

    'email.required': 'Email ist erforderlich',
    'email.email': 'Email nicht gültig',
    'password.required': 'Password ist erforderlich',
    'password.minLength': 'Password muss mindestens 8 Zeichen lang sein'
  }
}
