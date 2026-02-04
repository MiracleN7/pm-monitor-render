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
            password: "$2y$08$vq2ibCqIZqgr/8B6qI7ABeymJuTQPgiUFz1w1Goqj8YugQ92xdz4.",
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
