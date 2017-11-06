# Ionic Super Starter Template
This repository provides a structure for solid ionic projects. It provides functions for unit and E2E tests. In addition, a documentation of the Ionic project can be created.

## Installation
To run this project just clone it and run: `npm install`

```bash
ionic start ionic-super-starter danielsogl/super
```

## Usage
If you check out the package.json file you can see that I added some scripts:
```json
"docs": "./node_modules/.bin/compodoc -d ./public/docs/ -p ./tsconfig.json -n \"Ionic Super - Documentation\"",
"test": "jest",
"test:watch": "jest --watch",
"test:ci": "jest --runInBand",
"test:coverage": "jest --coverage",
"e2e": "npm run e2e-update && npm run e2e-test",
"e2e-test": "protractor ./test-config/protractor.conf.js",
"e2e-update": "webdriver-manager update --standalone false --gecko false"
```
In the following chapters I explain how to use them and waht they can do for you.

### Unit Tests
I implemented unit-tests with the awesome Jest framework.
Jest is a complete and easy to set-up JavaScript testing solution created by Facebook. Some of its benefits are:

- Fast and sandboxed
- Built-in code coverage reports
- Zero configuration

To run a unit-test you have three options.

1. A simple `npm run test` runs all your created unit-tests
2. Run `npm run test:ci` if you want to run the unit-tests with you favorite CI
3. To create a test-coverage report you can run `npm run test:coverage`

I added Ionic Mocks with Jest Support by forking the [ionic-mocks](https://github.com/stonelasley/ionic-mocks) ionic-mock repository. There are still some issues. 
Feel free to help me out with my create [ionic-mocks-jest](https://github.com/danielsogl/ionic-mocks-jest) repository.

If you want to add ionic-native mocks you should definitely check out Chris Griffith's [ionic-native-mocks](https://github.com/chrisgriffith/ionic-native-mocks) repository

Check out the unit-test example in the 'src/app' folder.

### E2E Tests
I implemented the E2E test configuration from the offical [ionic-unit-testing-example](https://github.com/ionic-team/ionic-unit-testing-example) repository. But I changed the e2e folder structure.
```
/e2e
  - pages
  - spec
```
Add your pages into the `/pages` folder and your tests into the `/spec` folder.

To serve the app, run ionic serve.
To run the end-to-end tests, run (while the app is being served) npm run e2e.
See the example end-to-end test in e2e/spec/app.e2e-spec.ts.

```bash
ionic serve
...
npm run e2e
```

### Documentation
If you want to create large applications a documentation is a must have. To create Angular application documentation, [compodoc](https://github.com/compodoc/compodoc) is a great solution.
To create the documentation of your Ionic app run a simple `npm run docs`
The command also creates a coverage report for you.
