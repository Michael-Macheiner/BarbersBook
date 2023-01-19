import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from "App/Enums/Roles";

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(Roles.ADMIN)
      table.integer('personID').unsigned().references('id').inTable('users')
      table.date('employee_since').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
