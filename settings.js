module.exports = {
    // ===== Render port =====
    uiPort: process.env.PORT || 1880,

    // ===== Paths =====
    httpAdminRoot: "/",      // Editor
    httpNodeRoot: "/api",    // HTTP In + Dashboard (/api/ui)

    // ===== Flow persistence (สำคัญมาก) =====
    userDir: process.cwd(),  // ใช้โฟลเดอร์ repo
    flowFile: "flows.json",  // ผูก flow กับ Git

    // ===== Credentials persistence =====
    credentialSecret: process.env.NODE_RED_SECRET,

    // ===== Editor =====
    disableEditor: false,

    // ===== Context store (กันข้อมูลหายตอน restart) =====
    contextStorage: {
        default: {
            module: "localfilesystem"
        }
    }
};
