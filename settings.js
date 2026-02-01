module.exports = {
    uiPort: process.env.PORT || 1880,

    // ⭐ เปิด editor แบบ explicit
    httpAdminRoot: "/",

    // ⭐ แยก http node ออกไป (กันชน)
    httpNodeRoot: "/api",

    // ⭐ บังคับเปิด editor
    disableEditor: false
};