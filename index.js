#!/usr/bin/env node

const shell = require("shelljs");
const chalk = require("chalk");

const projectName = process.argv[2];

if (projectName === undefined) {
  shell.echo(chalk.red("ERROR: Please enter project name"));
  shell.echo(
    chalk.blue("Usage: electron-react-redux-boilerplate <project-name>")
  );
  shell.exit(1);
}

if (!shell.which("git")) {
  shell.echo(chalk.red("ERROR: git is not available. Please install git"));
  shell.exit(1);
}

if (
  shell.exec(
    `git clone https://github.com/saisandeepvaddi/electron-react-redux-boilerplate.git ${projectName}`
  ).code !== 0
) {
  shell.echo(chalk.red("\nError: Issue with git"));
  shell.echo(
    chalk.blue(
      "\nInfo: Boilerplate available to manual install. Please visit the following link for details"
    )
  );
  shell.echo(
    chalk.cyan(
      "\nhttps://github.com/saisandeepvaddi/electron-react-redux-boilerplate\n"
    )
  );
  shell.exit(1);
}

shell.echo(`\n\t\t${chalk.underline("Install Dependencies")}`);
shell.echo(
  `\t
  ${chalk.green("cd")} ` + chalk.blue(`${projectName}`)
);

shell.echo(
  `\t
  ${chalk.magenta("npm install")} or ${chalk.magenta("yarn install")}
  \n
  `
);



shell.exit(1);
