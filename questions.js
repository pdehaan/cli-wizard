const {isBoolean, isEmpty} = require("validator");

exports.id = {
  type: "input",
  name: "id",
  message: "WebExtension id:",
  validate: value => !isEmpty(value)
};

exports.xtype = {
  type: "list",
  name: "xtype",
  message: "Shield (or Pioneer):",
  choices: ["shield", "pioneer"]
};

exports.tellSI = {
  type: "confirm",
  name: "tellSI",
  message: "Inform Strategy and Insights team about your project:",
  validate: value => isBoolean(value)
};

exports.libraries = {
  type: "checkbox",
  name: "libraries",
  message: "Choose additional libraries:",
  choices: [
    {
      name: "shield-study-addon-utils",
      checked: true
    }
  ]
};
