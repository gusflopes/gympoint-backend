<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
  <br>
</h1>

<p align="center">
<img alt="Github last commit" src="https://img.shields.io/github/last-commit/gusflopes/gympoint-backend">
<a href="https://www.codefactor.io/repository/github/gusflopes/gympoint-backend"><img src="https://www.codefactor.io/repository/github/gusflopes/gympoint-backend/badge" alt="CodeFactor" /></a>
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gusflopes/gympoint-backend">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/gusflopes/gympoint-backend.svg">
<a href="https://github.com/gusflopes/gympoint-backend/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/gusflopes/gympoint-backend.svg"></a>
<img alt="GitHub" src="https://img.shields.io/github/license/gusflopes/gympoint-backend.svg">
</p>

<h4 align="center">API Rest developed with Node.js, using Postgresql and Redis.</h4>
<p align="center"><strong>Current Status:</strong> Just finished GoStack Challenge 03.</p>


<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-runnig-for-first-time">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [Express][express]
- [Node.js][nodejs]
- [Sequelize][sequelize]
- [node-postgres][pg] and [pg-hstore][pg-hstore]
- [Json Web Tokens][jwt]
- [Nodemailer][nodemailer]
- [Bee Queue][bee]
- [dotenv][dotenv]
- [bcryptjs][bcryptjs]
- [Date-fns][date-fns]
- [express-handlebars][exphbs]
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :construction: Functionalities

:construction_worker: This section is under development. :construction_worker:


## :information_source: Running for First Time

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gusflopes/gympoint-backend gympoint-backend

# Go into the repository
$ cd gympoint-backend

# Install dependencies
$ yarn install

# Run Postgres
$ docker run --name database -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -d postgres:11

# Run Redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Setup the Postgres Database:
# Create the Database, then run Migrations & Seeds
$ yarn sequelize db:create
$ yarn sequelize db:migrate && yarn sequelize db:seed:all

# Run Nodemailer
$ yarn queue

# Run the Server
$ yarn dev
```

Running with Docker
```
# Docker-compose with Databases ready
docker-compose up -d

# Migrations
docker exec -it gympoint sh -c "yarn sequelize db:seed:all"
```
:information_source: There is an [Insomnia file](./insomnia.json) you can load on your Insomnia to test the routes.

## :memo: License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

Made by Gustavo Lopes :coffe: [Get in touch!](https://www.linkedin.com/in/gusflopes/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[express]: https://expressjs.com
[sequelize]: https://sequelize.org
[pg]:https://github.com/brianc/node-postgres
[pg-hstore]: https://github.com/scarney81/pg-hstore
[jwt]: https://jwt.io/
[nodemailer]: https://nodemailer.com/about/
[bee]: https://bee-queue.com/
[dotenv]: https://github.com/motdotla/dotenv#readme
[bcryptjs]: https://github.com/dcodeIO/bcrypt.js/
[date-fns]: (https://date-fns.org/)
[exphbs]: https://github.com/ericf/express-handlebars
