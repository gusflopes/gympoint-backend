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
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- Express
- Node.js
- Sequelize
- Nodemailer
- Json Web Token
- Yup
- Bee Queue
- .Env
- Bcryptjs
- Date-fns
- Exphbs
- Pg + Pg-hstore
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gusflopes/gympoint-backend gympoint-backend

# Go into the repository
$ cd gympoint-backend

# Install dependencies
$ yarn install

# Run Migrations & Seeds
$ yarn sequelize db:migrate && yarn sequelize db:seed

# Run Postgres
$ docker run --name database -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -d postgres:11

# Run Redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Run Nodemailer
$ yarn queue

# Run the Server
$ yarn dev
```

## :memo: License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

Made by Gustavo Lopes :coffe: [Get in touch!](https://www.linkedin.com/in/gusflopes/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
