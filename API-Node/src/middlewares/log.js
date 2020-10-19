const log = (request, response, next) => {
    console.log("\x1b[32m%s\x1b[0m",`REQUESTED METHOD [${request.method}] ON URL [${request.url}]`);
    next();
};

module.exports = log ;