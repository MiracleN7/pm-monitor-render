module.exports = {
  uiPort: process.env.PORT || 1880,

  disableEditor: false,   // ปิดหน้า editor (แนะนำ)

  editorTheme: {
    projects: {
      enabled: true
    }
  },

  adminAuth: null,
  httpNodeAuth: null,

  functionGlobalContext: {},

  flowFile: 'flows.json'
};
