<!-- @format -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# products_list_challenge

The current exercise is part of our recruitment process.
We expect that you deliver a functional code that we'll be able to run ou our machines.

Depending on your implementation methods or the problems that you have faced it is up to you wheter there's need for any documentation.

## Exercise

Based on the given html template, css stylesheet and json data we expect you deliver a working interface with the following features:

- List the products
- Show the available categories in the left navigation sorted by alphabetic order
- When each category is clicked a filter must be applied to display only the products of the correspondent category
- Filtering the products as you write in the search field
- Pagintation of list (page size of 3 entries)
- Considering the sum of the plans price you should sort the products by ascending order

## Data

You have received a json file with the list of products. This file should be fetched dinamically (like in a REST API).

Each product is composed by:

- an id
- a name
- a description
- one or more categories
- one or more purchase plans with name and price (in cents)

## Notes

It is up to you to decide the framework that you use to build this exercise, it can be React, Angular, Vue, Jquery or just vanilla javascript. Use what you feel more confortable with.
The base template provided is only a starting point. You can change/improve it or simply use your own.

\*\* please confirm that you have received the files "index.html", "styles.css" and "products.json"; if is anything missing, please request it.
