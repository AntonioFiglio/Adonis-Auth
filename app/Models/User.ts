import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
    @column({ isPrimary: true })
    public id: string

    @column()
    public email: string

    @column()
    public password: string

    @column()
    public username: string

    @column()
    public nickname: string

    @column()
    public remember_me_token: string | null

    @column.dateTime({ autoCreate: false })
    public remember_me_token_expiress: DateTime | null

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @beforeCreate()
    public static generete_uuid(user: User) {
        user.id = uuid()
    }

    @beforeSave()
    public static async hashPassword(user: User) {
        if (user.password) {
            user.password = await Hash.make(user.password)
        }
    }
}
