const path = require("path");
const { promisify } = require("util");
const copyTemplateDir = require("copy-template-dir");
const inquirer = require("inquirer");

const questions = require("./questions");

async function main() {
  try {
    const questionArr = [
      questions.id,
      questions.xtype,
      questions.tellSI,
      questions.libraries
    ];
    const answers = await runPrompts(questionArr);
    const files = await copyTemplate("template", "dist", answers);
    console.log(files);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

main();

async function runPrompts(questions) {
  return inquirer.prompt(questions);
}

async function copyTemplate(srcDir, destDir, params = {}) {
  const src = path.join(__dirname, srcDir);
  const dest = path.join(__dirname, destDir);
  const copy = promisify(copyTemplateDir);

  try {
    const createdFiles = await copy(src, dest, params);
    console.log(createdFiles);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}
