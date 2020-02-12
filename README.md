# An App that has some currently unknown responsibilities!

# Basic Prereqs
 - node.js version 12 or higher
 - npm
 - some sort of editor with a 'prettier' plugin

# Project Structure

- The project is divided into 2 main folders:
  - api
  - www

  Each one has similar structures and use identical dependencies as far as lint and test configuration.

# Top level setup
  ```
    npm install
  ```

# Top level scripts
  There are a few top level scripts that are defined inside of the package.json. These scripts are primarily used
  for the pre-commit and pre-push husky hooks. However, there may be a time when the pre-commit hook fails so
  the commands `npm run lint:api:fix` and `npm run lint:www:fix` can be used to fix any lint issues.

  NOTE:
    These commands will not auto commit changes for you. You will have to manually commit any changes that
    those commands make.

# api walkthrough
Api is the home of any endpoints that we will have for saving / retrieving app responsibilites. 

## First time setup
  ```
    npm install
  ```

## Starting api
  API can be started by running
  ```
    npm run start
  ```
  or if you want api to restart when changes are made, run it in watch mode
  ```
    npm run watch
  ```

## Testing api
  API can be tested by running
  ```
    npm run test
  ```
  or if you want tests to restart when changes are made, run it in watch mode
  ```
    npm run test:watch
  ```

## Linting api
  If you need to manually run lint, you can run
  ```
    npm run lint
  ```
  to find any lint errors that are currently present.

  Some errors may be auto fixable so you can run
  ```
    npm run lint:fix
  ```
  to automatically have those errors fixed.

  NOTE:
    Warnings can be ignored.


# www walkthrough
 www is where all of our UI will live. It will contain any components, html, or css that will
 be rendered on the website.

## Starting www
  www can be started by running
  ```
    npm run start
  ```
  www will automatically restart when changes are made to it's files.

## Testing www
  www can be tested by running
  ```
    npm run test
  ```
  which will start the tests in interactive mode. The tests will restart when changes
  are made to files.

  If you don't want to run the tests in interactive mode, run
  ```
    npm run test:deploy
  ```

## Linting www
  If you need to manually run lint, you can run
  ```
    npm run lint
  ```
  to find any lint errors that are currently present.

  Some errors may be auto fixable so you can run
  ```
    npm run lint:fix
  ```
  to automatically have those errors fixed.

  NOTE:
    Warnings can be ignored.

