import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import { DateTime } from 'luxon'
import User from 'App/Models/User'

export default class UsersController {
    public async signUP({ auth, request, response }: HttpContextContract) {
        const { email, password, username, nickname } = request.only(['email', 'password', 'username', 'nickname'])

        try {
            if (!(email || password || username || nickname)) throw new Error('missing arguments')

            email.toLowerCase()

            const { email: _email, id: user_id } = await (await User.create({ email, password, username, nickname })).serialize()

            const token = await auth.use('api').attempt(_email, password, {
                name: _email,
            })

            return response.status(200).json({ token, user_id })
        } catch (e) {
            if (e.message.includes('missing arguments')) return response.badRequest('Missing arguments')
            if (e.message.includes('users_email_unique')) return response.badRequest('User alread exists')
            if (e.message.includes('E_INVALID_AUTH_PASSWORD')) return response.badRequest('Password invalid')

            return response.badRequest('Generic Error')
        }
    }
    public async signIN({ auth, request, response }: HttpContextContract) {
        const { email, password } = request.only(['email', 'password'])

        try {
            if (!(email || password)) throw new Error('missing arguments')

            email.toLowerCase()

            const user = await User.findBy('email', email)

            if (!user) throw new Error('not found')

            const token = await auth.use('api').attempt(email, password, {
                name: email,
            })

            return response.status(200).json({ token, user_id: user.id })
        } catch (e) {
            if (e.message.includes('missing arguments')) return response.badRequest('Missing arguments')
            if (e.message.includes('E_INVALID_AUTH_UID')) return response.badRequest('User not found')
            if (e.message.includes('E_INVALID_AUTH_PASSWORD')) return response.badRequest('Password invalid')
            return response.badRequest('Generic Error')
        }
    }
    public async forgotPassword({ request, response }: HttpContextContract) {
        const { email } = request.only(['email'])

        try {
            if (!email) throw new Error('missing arguments')

            email.toLowerCase()

            const user = await User.findBy('email', email)

            if (!user) throw new Error('not found')

            let resetToken: string = ''
            let expireToken: Date = new Date()
            expireToken.setHours(expireToken.getHours() + 1).toString()

            for (let i = 0; i < 6; i++) {
                let Random = Math.floor(Math.random() * 9).toString()
                resetToken += Random
            }

            user.remember_me_token = resetToken
            user.remember_me_token_expiress = DateTime.fromJSDate(expireToken)

            await user.save()

            await Mail.send((message) => {
                message
                    .to(email)
                    .subject('Reset Password Token')
                    .htmlView('forgot_password', { title: 'Reset Password Token', name: user.username, token: resetToken })
            })

            return response.noContent()
        } catch (e) {
            if (e.message.includes('missing arguments')) return response.badRequest('Missing arguments')
            if (e.message.includes('not found')) return response.badRequest('User not found')

            return response.badRequest('Generic Error')
        }
    }
    public async resetPassword({ request, response }: HttpContextContract) {
        const { token, email, newPassword } = request.only(['token', 'email', 'newPassword'])

        try {
            if (!(email || token)) throw new Error('missing arguments')
            email.toLowerCase()

            const user = await User.findBy('email', email)

            if (!user) throw new Error('not found')

            if (token !== user.remember_me_token) throw new Error('not found')

            user.password = newPassword
            user.remember_me_token = null
            user.remember_me_token_expiress = null

            await user.save()

            return response.noContent()
        } catch (e) {
            if (e.message.includes('missing arguments')) return response.badRequest('Missing arguments')
            if (e.message.includes('E_INVALID_AUTH_UID')) return response.badRequest('User not found')

            return response.badRequest('Generic Error')
        }
    }
    public async deleteAccount({ request, response }: HttpContextContract) {
        const { user_id: id } = request.only(['user_id'])

        try {
            if (!id) throw new Error('missing arguments')

            const user = await User.findBy('id', id)

            if (!user) throw new Error('not found')

            await user.delete()

            return response.noContent()
        } catch (e) {
            if (e.message.includes('missing arguments')) return response.badRequest('Missing arguments')
            if (e.message.includes('E_INVALID_AUTH_UID')) return response.badRequest('User not found')

            return response.badRequest('Generic Error')
        }
    }
}
