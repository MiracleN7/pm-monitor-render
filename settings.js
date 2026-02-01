module.exports = {
    uiPort: process.env.PORT || 1880,

    // ⭐ เพิ่มบรรทัดนี้
    httpRoot: "/",

    httpAdminRoot: "/red",
    httpNodeRoot: "/api",

    disableEditor: false,

    editorTheme: {
        projects: {
            enabled: false   // ให้ตรงกับที่ Render แสดง
        }
    }
};
