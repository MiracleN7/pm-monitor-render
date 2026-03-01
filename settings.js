module.exports = {

    uiPort: process.env.PORT || 1880,

    httpAdminRoot: "/",
    httpNodeRoot: "/api",

    // 🔥 ใช้ Disk ถาวร
    userDir: "/data",
    flowFile: "flows.json",

    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,

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