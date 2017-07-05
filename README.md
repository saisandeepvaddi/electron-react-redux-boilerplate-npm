# Description
Electron boilerplate with react and redux pre-configured

Visit this [link][original] for manual install


# What is pre-configured
- Webpack
- Basic Redux boilerplate
- Persistence storage with [electron-settings][1]. Can be disabled easily if not needed. Check comments in the reducer file in `renderer/reducers/index.js`

# Install

- Install `Electron`

```shell 
  yarn global add electron

  (or)

  npm i -g electron
```

- Install this package globally

```shell
  yarn global add electron-react-redux-boilerplate

  (or)

  npm i -g electron-react-redux-boilerplate
```

# Usage

- Create Project and install dependencies

```shell
  electron-react-redux-boilerplate <project-name>

  cd <project-name>

  npm install (or) yarn install
```

- Have two terminals opened. One for Webpack build. Another for Electron

```shell
  terminal_1> yarn webpack:dev (or) npm run webpack:dev
  terminal_2> yarn start (or) npm run start
```

- Devtron is included. Run the following in application's DevTools console

```javascript
  require('devtron').install()
```




# Note

```
  Your Terminal should have git installed.
```

This npm package actually clones the original boilerplate [repository][original]. So follow the installation procedure mentioned there for any kind of issues.


# License

[MIT](https://github.com/saisandeepvaddi/electron-react-redux-boilerplate-npm/blob/master/LICENSE) 



[1]: https://www.npmjs.com/package/electron-settings
[original]: https://github.com/saisandeepvaddi/electron-react-redux-boilerplate