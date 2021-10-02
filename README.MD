# AUTH WITH ADONIS

Project developed as the objetive to learn and improve my programming skills.
<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">Method</th>
    <th class="tg-c3ow">BreakPoint</th>
    <th class="tg-c3ow">Authorization</th>
    <th class="tg-c3ow">Query String</th>
    <th class="tg-c3ow">Body</th>
    <th class="tg-c3ow">Expected</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow">POST</td>
    <td class="tg-c3ow">/api/auth/sign-up</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow">email: string, username: string, nickname: string | null, password: string</td>
    <td class="tg-c3ow">{<br><br>  "token": {<br>    "type": "bearer",<br>    "token": "*"<br>  },<br>  "user_id": "*"<br>}</td>
  </tr>
  <tr>
    <td class="tg-c3ow">POST</td>
    <td class="tg-c3ow">/api/auth/sign-in</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow">email: string,password: string</td>
    <td class="tg-c3ow">{<br><br>  "token": {<br>    "type": "bearer",<br>    "token": "*"<br>  },<br>  "user_id": "*"<br>}</td>
  </tr>
  <tr>
    <td class="tg-c3ow">POST</td>
    <td class="tg-c3ow">/api/auth/forgot-password?email={email}</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow">email: string,</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow"># NOT CONTENT - HTTP CODE 201</td>
  </tr>
  <tr>
    <td class="tg-c3ow">POST</td>
    <td class="tg-c3ow">/api/auth/reset-password?token={token}</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow">token: string,</td>
    <td class="tg-c3ow">email: string, newPassword: string</td>
    <td class="tg-c3ow"># NOT CONTENT - HTTP CODE 201</td>
  </tr>
  <tr>
    <td class="tg-c3ow">DELETE</td>
    <td class="tg-c3ow">/api/auth/delete?user_id:{user_id}</td>
    <td class="tg-c3ow">Authorization:<span>`Bearer: ${user_token}`</span></td>
    <td class="tg-c3ow">user_id: string,</td>
    <td class="tg-c3ow">not required</td>
    <td class="tg-c3ow"># NOT CONTENT - HTTP CODE 201</td>
  </tr>
</tbody>
</table>

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
