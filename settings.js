module.exports = {
  uiPort: process.env.PORT || 1880,

  disableEditor: true,   // ปิดหน้า editor (แนะนำ)

  editorTheme: {
    projects: {
      enabled: false
    }
  },

  adminAuth: null,
  httpNodeAuth: null,

  functionGlobalContext: {},

  flowFile: 'flows.json'
};
