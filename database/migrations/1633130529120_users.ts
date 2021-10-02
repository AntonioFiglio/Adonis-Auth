import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
    protected tableName = 'users'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary()
            table.string('email', 255).notNullable().unique()
            table.string('username', 255).notNullable().unique()
            table.string('nickname', 255).notNullable()
            table.string('password', 180).notNullable()
            table.string('remember_me_token').nullable()
            table.timestamp('remember_me_token_expiress', { useTz: true }).nullable()

            table.timestamp('created_at', { useTz: true }).notNullable()
            table.timestamp('updated_at', { useTz: true }).notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
