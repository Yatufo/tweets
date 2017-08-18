[![Build Status](https://travis-ci.org/Yatufo/tweets.svg?branch=master)](https://travis-ci.org/Yatufo/tweets)
[![Dependency Status](https://dependencyci.com/github/Yatufo/tweets/badge)](https://dependencyci.com/github/Yatufo/tweets)



## Start

- Install dependencies:
`$ yarn install`

- Host dev environment and start to build something changing the world!
`$ yarn start`

- To run the test with Mocha, Enzyme, Sinon and Chai:
`$ yarn test:ci`

## Testing:

### Tools:

- [Mocha](https://mochajs.org/) as testing framework
- [Chai](http://chaijs.com/) as assertion library
- [Rewire](https://github.com/speedskater/babel-plugin-rewire) and [Sinon](http://sinonjs.org/) to mock/stub
- [Enzyme](http://airbnb.io/enzyme/index.html) to do React rendering

### Development process:

When developing a feature,

* First run a separate process converting ES6 to ES5 lively:

```
$ yarn run test:watch
```

* Run the test case of a single file/directory by:

```
$ yarn test -- <the-file-path>
```

For example:

```
$ yarn test -- app/test/actions
```

* Before deployment, run all the test cases to make sure everything is fine by:

```
$ yarn test:ci
```

## How it works:

### Assets Management

When handling static assets, we want to achieve the following goals:

- Make assigning assets url a no-brainer
- Apply revision when deploying to production to integrate with CDN services easily

The usage example can be found in `[Intro Container](https://github.com/mz026/universal-redux-template/blob/master/app/containers/Intro.js)`


We achieve this by:

First, creating an assets container folder: `app/assets`

### In development mode:

Assign static folder linking `/assets` to the folder above

### In production mode:

Use a gulp task (`gulp build`) to handle it:

- A set of `[rev](https://github.com/smysnk/gulp-rev-all)-ed` assets with hash code appended would be built into `dist/public/assets`
- A static middleware mapping root url to the folder mentioned above is configured in `server.js`
- A set of `[revReplace](https://github.com/jamesknelson/gulp-rev-replace)-ed` server code would be built into `dist/server-build`, so that the rev-ed assets can be used when doing server rendering


### Redirect after API Calls

Under some cases, we'd like to do 302 redirect after fetching API. For example:

```
When users try to access a question page via an unexisting Id, redirect her to Index route.
```

In the code layer, we want the implementation to be shared on both client and server side.
This is achieved by passing a `history` instance to action creators, and use `history.push` whenever needed.

On the client side, `react-router` would then take care the rest of redirecting logic,
while on server side, we subscribe the url-chaning events on each request, and redirect requests to proper pages if needed.

Such implementation can be found in [`QuestionContainer`](https://github.com/mz026/universal-redux-template/blob/master/app/containers/UserTweetsContainer.js),
[`questions action`](https://github.com/mz026/universal-redux-template/blob/master/app/actions/questions.js)


## Vendor Scripts:

Vendor related scripts are bundled into a `vendor.js`,
associated settings can be found in the `entry` field of `webpack.config.js`.

(thanks [@dlombardi](https://github.com/dlombardi) for pointing it out!)

## Deployment:

To deploy this app to production environment:

- Prepare a server with NodeJS environment

- Use whatever tool to upload this app to server. ([Capistrano](http://capistranorb.com/) is a good choice.)

- Run `$ NODE_ENV=production yarn install` on server
  - After the installation above, `postinstall` script will run automatically, building front-end related assets and rev-ed server code under `dist/` folder.

- Kick off the server with:

` NODE_ENV=production NODE_PATH=./dist/server-build node dist/server-build/server`

### Deploy to Heroku

To deploy this app to heroku,

- Set up heroku git remote url
- Set `API_BASE_URL` to heroku config var. (without trailing slash)

Here's a [sample](https://redux-template-test.herokuapp.com/) deployed to heroku: https://redux-template-test.herokuapp.com/
For this case, the `API_BASE_URL` mention above would be `https://redux-template-test.herokuapp.com`


## Resources:
  - [Blogpost on Codementor](https://www.codementor.io/reactjs/tutorial/redux-server-rendering-react-router-universal-web-app)
