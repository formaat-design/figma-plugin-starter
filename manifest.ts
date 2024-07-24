// https://www.figma.com/plugin-docs/manifest/

export default {
  name: "My plugin", // Insert your plugin name
  id: "1397857039488871821", // Insert your plugin id
  api: "1.0.0",
  main: "./canvas.js",
  ui: "./plugin.html",
  editorType: ["figma"],
  networkAccess: {
    allowedDomains: ["none"],
  },
};
