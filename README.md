# Thanos

> "Fun Isn't Something One Considers When Balancing The Universe. But This... Does Put A Smile On My Face." 

Thanos is a Node.js package that removes unused npm modules from a project directory. It can be used to optimize the package size and improve the performance of a Node.js application.
add


## Installation

To use Thanos, you need to have Node.js and npm installed on your system. You can then install Thanos using the following command:

```bash
npm install thanos-package
```

## Usage

To use Thanos, you need to call the removeUnusedNpmModules function in your Node.js code. Here's an example of how to use Thanos in a Node.js script:

```javascript
const { SnapTheFinger } = require('thanos-package');

SnapTheFinger();
```
This will list all the installed packages in the current project directory, identify the unused packages, and prompt the user to confirm whether they want to remove all unused packages or keep some of them. The function will then remove the selected packages.

Note that you can also specify a custom project directory as an argument to the removeUnusedNpmModules function:

```javascript
const { SnapTheFinger } = require('thanos-package');

const projectDirectory = '/path/to/my/project';
removeUnusedNpmModules(projectDirectory);

```


> "Perfectly Balanced, As All Things Should Be."

## Contributing
If you want to contribute to the Thanos project, you can fork the repository on GitHub and submit a pull request with your changes. Please make sure to follow the coding style and guidelines of the project.

Please make sure to update tests as appropriate.

## License
Thanos is licensed under the MIT License. See the MIT file for details.
[MIT](https://choosealicense.com/licenses/mit/)