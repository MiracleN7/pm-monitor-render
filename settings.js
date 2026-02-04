module.exports = {
    // ===== Render port =====
    uiPort: process.env.PORT || 1880,

    // ===== Paths =====
    httpAdminRoot: "/",      // Editor
    httpNodeRoot: "/api",    // HTTP In + Dashboard (/api/ui)

    // ===== Flow persistence =====
    userDir: process.cwd(),
    flowFile: "flows.json",

    // ===== Credentials persistence =====
    credentialSecret: process.env.NODE_RED_SECRET,

    // ===== Editor =====
    disableEditor: false,

    // ===== Admin Auth (ล็อก Editor) =====
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2y$08$MVYbHHXafzH9p4Ok5MWer.kVfCnAVYDBEsLAoPReLnrFlvGTYD82W",
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
