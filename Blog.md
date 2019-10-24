# GoStack: Challenge 02
### Rocketseat Bootcamp - Desafio 02

### Instructions
Will be completed later.

### Ambiente

Docker:
```
docker run --name database -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -d postgres:11`

docker run --name redis -p 6379:6379 -d -t redis:alpine
```

### DEPENDENCIES
- Express

### DEV DEPENDENCIES
- sucrase
- nodemon
- sequelize-cli


- eslint
- prettier
- eslint-config-aribnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier

Initial Config
#### ESLINT
```
yarn add eslint -D
yarn eslint --init
```
Just delete the npm file and type a `yarn` to fix the package.json

#### Prettier
`yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

### SEQUELIZE

```
yarn sequelize migration:create --name=create-users
yarn sequelize db:seed:all

yarn sequelize migration:create --name=create-students
```
