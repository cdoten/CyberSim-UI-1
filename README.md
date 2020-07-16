# ndi-cybersim-api

## To set up the project on your local environment run the following commands:

```
# Clone the project by running git clone.
$ git clone <REPO_LINK>
# Install the node dependencies by running
$ npm install
# Create a .env file based on .env.example
$ cp .env.example .env
# Start the React App on localhost:3000 (if nothing changed in .env.example)
$ npm start
```

## AWS environment:

### The AWS environment supports both continuous integration and continuous deployment. The environment is made of the following components:

- **Github repository (nditech/CyberSim-UI)**: Each change on the local repositories are pushed to a new branch in the Github remote. Once these changes are reviewed, they are merged into the 'master' branch.

- **CodePipeline (ndi-cybersim-ui-staging, ndi-cybersim-ui-prod)**: A CodePipeline project is created for both staging and production environments. For the staging environment a webhook is registered on Github, so each change on the 'master' branch will trigger and automatic build on AWS. For the production environment no webhook is registered so changes on the 'master' branch will require a manual release in CodePipeline.

- **CodeBuild (ndi-cybersim-ui)**: A single CodeBuild project is created to build and test both staging and production changes. After a change is triggered on CodePiepeline (manually or automatically), the source code is transferred to CodeBuild and the steps defined in the 'buildspec.yml' file are executed. These steps include the installation of node, npm packages and the the bundling of the react app into static files. Once the build completed, CodePiepeline begins the deployment by transferring the output files in the build directory to S3. The `REACT_APP_API_URL` environment variable should be changed in the `buildspec.yml` file to the live URL of the backend API.

- **S3 (ndi-cybersim-ui-staging, ndi-cybersim-ui-prod)**: A different S3 bucket is created for both staging and production. Public access is enabled on these buckets which are configured for static website hosting.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
