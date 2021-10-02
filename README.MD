# AUTH WITH ADONIS

Project developed as the objetive to learn and improve my programming skills.

| Method |               BreakPoint                |             Authorization             |   Query String   |                                    Body                                     |                            Expected                             |
| :----: | :-------------------------------------: | :-----------------------------------: | :--------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------: |
|  POST  |            /api/auth/sign-up            |             not required              |   not required   | email: string, username: string, nickname: string \| null, password: string | { "token": { "type": "bearer", "token": "_" }, "user_id": "_" } |
|  POST  |            /api/auth/sign-in            |             not required              |   not required   |                       email: string,password: string                        | { "token": { "type": "bearer", "token": "_" }, "user_id": "_" } |
|  POST  | /api/auth/forgot-password?email={email} |             not required              |  email: string,  |                                not required                                 |                  # NOT CONTENT - HTTP CODE 201                  |
|  POST  | /api/auth/reset-password?token={token}  |             not required              |  token: string,  |                     email: string, newPassword: string                      |                  # NOT CONTENT - HTTP CODE 201                  |
| DELETE |   /api/auth/delete?user_id:{user_id}    | Authorization:`Bearer: ${user_token}` | user_id: string, |                                not required                                 |                  # NOT CONTENT - HTTP CODE 201                  |

# Techs and Tools

-   [Adonis](https://docs.adonisjs.com/guides/introduction)
-   [Adonis Auth](https://docs.adonisjs.com/guides/auth/introduction)
-   [Adonis Lucid](https://docs.adonisjs.com/guides/database/introduction)
-   [DataBase - PostgreSQL](https://www.postgresql.org/)
-   [Adonis Mail](https://docs.adonisjs.com/guides/mailer)
-   [Adonis View](https://docs.adonisjs.com/guides/views/introduction)
-   [Japa](github.com/thetutlage/japa#readme)
-   [SuperTest](https://www.npmjs.com/package/supertest)

<div align="center">
 
<br />

### **Made by [AntonioLourencos](https://www.linkedin.com/in/antoniolourencos/)**

<br />
 
<img width="150" src="https://camo.githubusercontent.com/affae0a22ee54ab97fb432a0cea816c8f42ad80b1d3d6c132c3e65d10c764815/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e643947635279495f2d67584367645368534479767453735839665442684146796d7277596f4f304126757371703d434155"/>
 
</div>
