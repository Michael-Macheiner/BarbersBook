import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Profile from 'App/Models/Role'

export default class Employee extends BaseModel {
  @hasOne(() => Profile, {
    foreignKey: 'profileUserId',
  })
  public profile: HasOne<typeof Profile>

  @column({ isPrimary: true })
  public id: number

  @column()
  public personID: number

  @column()
  public employee_since: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
