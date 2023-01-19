import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from 'App/Models/Role'

export default class Service extends BaseModel {
  @hasMany(() => Profile, {
    foreignKey: 'profileServiceId',
  })

  public profile: HasMany<typeof Profile>

  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column()
  public service_price: number

  @column()
  public average_time: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
