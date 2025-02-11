const { contextBridge } = require("electron/renderer");
const personDB = require("../../src/database/PersonManager");

contextBridge.exposeInMainWorld("api", {
  sqlite: {
    personDB,
  },
  versions: {
    node: () => process.versions.node,
    electron: () => process.versions.electron,
  },
});
