This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Explanation
 
1) Clone the Project and run yarn install to download dependencies.I have used yarn as a package manager.
2) The Application contains following sections
     1) Header with company logo and buttons to change the language.I have used only two locales English and German.I have translated the static text that you see only on initial load of the application.
     2)Form Section contains drop down to select income or expense,input fields to add description and value of incomes/expenses and add button to submit the form.I have created left section and right section for incomes and expenses list add.On hovering each list item you can see buttons to edit and delete.
     3)Sankey chart,i have used https://www.amcharts.com/demos/sankey-diagram/ for employing sankey diagram into project.I have taken care of the use case mentioned in the mail only as initial data,dynamic rendering of chart will be done only if incomes and expenses are added.
     
 3)I made use of Redux Tool kit(https://redux-toolkit.js.org/) to configure store and leveraged the benefits offered by this toolkit.
 4)I used hooks from React and Redux-redux for composing components,to access store,dispatching actions.
 5)Did Unit testing of code upto 80% using Jest and Enzyme.
