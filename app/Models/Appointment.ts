import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Profile from 'App/Models/Role'

export default class Appointment extends BaseModel {
  @hasOne(() => Profile, {
    foreignKey: 'profileUserId',
  })
  public profile: HasOne<typeof Profile>

  @column({ isPrimary: true })
  public id: number

  @column()
  public date: DateTime

  @column()
  public employeesID: number

  @column()
  public customerID: number

  @column()
  public categoriesID: number

  @column()
  public serviceID: number

  @column()
  public remarks: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
