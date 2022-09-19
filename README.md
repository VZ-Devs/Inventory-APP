# inventory-app

> A full-stack application to track your inventory using Vite React Express and SQLLite.

ESLint, stylelint, prettier, husky and lintstaged are configured to provide a solid development experience.

## Installing / Developing

```shell
npm install
```

This will install the dependencies required to run the APP.

```shell
npm run dev
```

Boom! These scripts run your server and client in development mode.

The default PORTS are:

- `3001` for the server
- `3000` for the client

If you don't like to call all scripts at once, you can also run:

```shell
npm run server:dev
npm run client:dev
```

Configure the server port by setting the `PORT` environment variable. 
Creating a `.env` file is supported. 

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 3001) |

## Building

To build the project, run:

```shell
npm run build
```

This will build the client and server.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/*` is the client.

## Tests

A test runner is not installed (right now). But ESLint and Prettier are checked on commit and pushed thanks to husky and lintstaged.

## Licensing

MIT
