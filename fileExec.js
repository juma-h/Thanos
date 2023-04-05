/**
 * Removes unnecessary npm modules after a project is deployed
 * @returns {void}
 */
const { execSync } = require('child_process');
const readline = require('readline');

function SnapTheFinger() {
  const projectDirectory = process.cwd();
  const npmModules = execSync('npm ls --depth=0', { cwd: projectDirectory }).toString();
  const modulesToRemove = npmModules.split('\n').filter(module => module.includes('(empty)'));

  console.log("All packages::" + npmModules)

  console.log('Unused npm modules found:');
  console.log(modulesToRemove);

 

  if (modulesToRemove.length === 0) {
    console.log('No unused npm modules found.');
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`Do you want to remove all ${modulesToRemove.length} unused npm modules? (y/n): `, (answer) => {
    if (answer.toLowerCase() === 'y') {
      modulesToRemove.forEach(module => {
        const moduleName = module.split(' ')[0];
        execSync(`npm uninstall ${moduleName}`, { cwd: projectDirectory });
      });

      console.log(`Removed ${modulesToRemove.length} unused npm modules.`);
    } else {
      rl.question('Enter the names of the npm modules you want to keep (comma-separated): ', (moduleNames) => {
        const modulesToKeep = moduleNames.split(',').map(name => name.trim());
        const modulesToRemoveFiltered = modulesToRemove.filter(module => {
          const moduleName = module.split(' ')[0];
          return !modulesToKeep.includes(moduleName);
        });

        modulesToRemoveFiltered.forEach(module => {
          const moduleName = module.split(' ')[0];
          execSync(`npm uninstall ${moduleName}`, { cwd: projectDirectory });
        });

        console.log(`Removed ${modulesToRemoveFiltered.length} unused npm modules.`);
      });
    }

    rl.close();
  });
}

SnapTheFinger();


// const { execSync } = require("child_process");
// const readline = require("readline");

// function removeUnusedNpmModules() {
//   //get all modules
//   const npmModules = execSync("npm ls --depth=0").toString();
//   const allModules = npmModules.split("\n").filter((module) => module !== "");

//   //list all the used modules
//   const usedModules = allModules.filter(
//     (module) => !module.includes("(empty)")
//   );

//   //get unused modules
//   const unusedModules = allModules
//     .filter((module) => module.includes("(empty)"))
//     .map((module) => module.split(" ")[0]);

//   console.log("All installed npm packages:\n", allModules.join("\n"));
//   console.log("Unused npm packages:\n", unusedModules.join("\n"));

//   //interface for command line
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.question(
//     "Do you want to remove all unused packages? [y/n]: ",
//     (answer) => {
//       if (answer.toLowerCase() === "y") {
//         unusedModules.forEach((module) => {
//           execSync(`npm uninstall ${module}`);
//         });
//         console.log("All unused npm packages have been removed.");
//         rl.close();
//       } else {
//         rl.question(
//           "Enter the names of the packages you want to keep (separated by commas): ",
//           (answer) => {
//             const modulesToKeep = answer
//               .split(",")
//               .map((module) => module.trim());
//             const modulesToRemove = unusedModules.filter(
//               (module) => !modulesToKeep.includes(module)
//             );
//             modulesToRemove.forEach((module) => {
//               execSync(`npm uninstall ${module}`);
//             });
//             console.log("Selected npm packages have been removed.");
//             rl.close();
//           }
//         );
//       }
//     }
//   );

//   //   modulesToRemove.forEach((module) => {
//   //     console.log(`Removing ${module}...`);
//   //     execSync(`npm uninstall ${module}`);
//   //   });
// }

// module.exports = removeUnusedNpmModules;

// removeUnusedNpmModules();
