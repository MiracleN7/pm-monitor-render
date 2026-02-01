module.exports = {

    // Render ใช้ port นี้
    uiPort: process.env.PORT || 1880,

    // 👉 กำหนด path ชัดเจน
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",

    // เปิด editor
    disableEditor: false,

    editorTheme: {
        projects: {
            enabled: true
        }
    },

    // ปิด auth ชั่วคราว
    adminAuth: null
};