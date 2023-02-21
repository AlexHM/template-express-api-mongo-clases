# template-express-api-mongo-clases

### Versions
API uses version node 16 and mongodb 5

### Executing


First you have to install the node packets using npm or yard:
```sh
npm install
```
### Compile server

First we must have it installed [Mongo community server](https://www.mongodb.com/try/download/community)

```sh
tsc
```
In order to compile to Javascript all typescript code

### Raise Server
then we execute some of the following commands to run



```sh
npm run dev-start
```
```sh
Response:
Server running
Port: 7000
Enviroment: development
Database: development database
```

```sh
npm run int-start
```
```sh
Response:
Server running
Port: 7000
Enviroment: integration
Database: integration database
```

```sh
npm run prod-start
```
```sh
Response:
Server running
Port: 7000
Enviroment: production
Database: production database
```

```sh
npm test || npm run test
```
executing test with jest.js

```sh
npm run lint
```
execute linter warnings in order to follow the stablished rules




