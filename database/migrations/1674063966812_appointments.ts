import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'appointments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.dateTime('date').notNullable()
      table.integer('employeesID').unsigned().references('id').inTable('employees').notNullable()
      table.integer('customerID').unsigned().references('id').inTable('customers').notNullable()
      table.integer('categoriesID').unsigned().references('id').inTable('categories').notNullable()
      table.integer('serviceID').unsigned().references('id').inTable('services').notNullable()
      table.string('remarks', 200)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
