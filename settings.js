module.exports = {
    // ===== Render port =====
    uiPort: process.env.PORT || 1880,

    // ===== Paths =====
    httpAdminRoot: "/",      // Editor
    httpNodeRoot: "/api",    // HTTP In + Dashboard (/api/ui)

    // ===== Flow persistence =====
    userDir: process.cwd(),
    flowFile: "flows.json",

    process.env.GOOGLE_SERVICE_KEY && 
    (process.env.GOOGLE_SERVICE_KEY = process.env.GOOGLE_SERVICE_KEY.replace(/\\n/g, '\n'));

    // ===== Credentials persistence =====
    credentialSecret: process.env.NODE_RED_SECRET,

    // ===== Editor =====
    disableEditor: false,

    // ===== Admin Auth (ล็อก Editor) =====
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$p2GwtQDKMEShFPxBOCSnROB6o5MsA39KwcxJfaL4M7.75FNk8PiOi",
            permissions: "*"
        }]
    },

    // ===== Context store =====
    contextStorage: {
        default: {
            module: "localfilesystem"
        }
    }
};
