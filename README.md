# BASK Files

Set of special functions for working with files and the linux command line, not presented in the base functionality of node js
* ls
* cat

## Install

```sh
npm i bask-files --save
```

## Linux commands
In order not to constantly import libraries designed to interact with the linux console,
the ability to call these commands without additional connections and parameters has been added to the package

```js
const { ls, cat } = require('bask-files');
ls('./');
cat('./README.md')
```