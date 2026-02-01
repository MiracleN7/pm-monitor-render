module.exports = {

    // ⭐ สำคัญที่สุด
    uiPort: process.env.PORT || 1880,

    // ⭐ เปิด editor
    disableEditor: false,

    editorTheme: {
        projects: {
            enabled: true
        }
    },

    // ปิด auth ชั่วคราวก่อน (เพื่อเข้าได้แน่)
    adminAuth: null
};
