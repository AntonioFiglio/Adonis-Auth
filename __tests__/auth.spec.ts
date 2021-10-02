import test from 'japa'
import Request from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/`

test.group('Authentication sucess :D', () => {
    test('Create & Delete', async (expect) => {
        const user = { email: 'who@who.com', username: 'Who', nickname: 'who is me?', password: 'potate' }
        const request_new_user = await Request(BASE_URL).post('api/auth/sign-up').send(user)

        expect.exists(request_new_user, 'user_id')
        expect.exists(request_new_user, 'token')

        const request_delete_user = await Request(BASE_URL)
            .delete(`api/auth/delete?user_id=${request_new_user.body.user_id}`)
            .set('Authorization', `bearer ${request_new_user.body.token.token}`)

        expect.isEmpty(request_delete_user.body)
    })

    test('Create & SignIn ', async (expect) => {
        const user = { email: 'who@who.com', username: 'Who', nickname: 'who is me?', password: 'potate' }
        const request_new_user = await Request(BASE_URL).post('api/auth/sign-up').send(user)

        expect.exists(request_new_user, 'user_id')
        expect.exists(request_new_user, 'token')

        const request_signIn_user = await Request(BASE_URL).post('api/auth/sign-in').send(user)

        expect.exists(request_signIn_user, 'user_id')
        expect.exists(request_signIn_user, 'token')

        const request_delete_user = await Request(BASE_URL)
            .delete(`api/auth/delete?user_id=${request_new_user.body.user_id}`)
            .set('Authorization', `bearer ${request_new_user.body.token.token}`)

        expect.isEmpty(request_delete_user.body)
    })
})
