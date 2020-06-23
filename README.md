This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Recipe App

An application which help the user find a cooking recipe by searching some of the ingredients in a searchbar. It also got an blog site so the user can read new curiosities in food subject.

Technologies used: React(hooks, react-routes) + Sass

Api with recipes which is used: https://developer.edamam.com/edamam-recipe-api for developer usage.

### Setup

Install Node.js

You will need an app key and app id. You can get it by registering in the link from above. 

In the path /src/api/index.js there are two variables in which you need to paste your app id and app key.

```sh
$ const APP_ID = YOUR_APP_ID;
$ const APP_KEY = YOUR_APP_KEY;
```

After that, install the dependencies and devDependencies with:

```sh
$ npm install
```

To start the project just type: 

```sh
$ npm start
```