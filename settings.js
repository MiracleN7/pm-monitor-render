// แก้ newline จาก Render env

module.exports = {

    // ===== Render port =====
    uiPort: process.env.PORT || 1880,

    // ===== Paths =====
    httpAdminRoot: "/",
    httpNodeRoot: "/api",

    // ===== Flow persistence =====
    userDir: process.cwd(),
    flowFile: "flows.json",

    // ===== Credentials persistence =====
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,

    // ===== Editor =====
    disableEditor: false,

    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$p2GwtQDKMEShFPxBOCSnROB6o5MsA39KwcxJfaL4M7.75FNk8PiOi",
            permissions: "*"
        }]
    },

    contextStorage: {
        default: {
            module: "localfilesystem"
        }
    }
};