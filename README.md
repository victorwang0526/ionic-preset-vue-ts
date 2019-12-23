## ionic preset vue [Typescript]

`ionic`, `vue`, `typescript`, `class style component`

`router`, `babel`, `history model for router`

`linter`

js: https://github.com/victorwang0526/ionic-preset-vue

## Install

> vue create -p victorwang0526/ionic-preset-vue-ts my-project

### build dist first

> npm run build

### add ios and android platforms

> npx cap add ios

> npx cap open ios

> npx cap add android

> npx cap open android


### sync your app

> npx cap copy


## travis

1. create local

> vue create -f -n --preset ../ionic-preset-vue-ts ionic-vue-preset-ts-app

2. push ./ionic-vue-preset-ts-app to github

3. travis auto build the app
