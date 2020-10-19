const app = require('./src/config/express');

app.listen(process.env.API_PORT, () => {
    console.log(
        `API Server named: ${process.env.API_NAME} started and listening on http://${process.env.API_URL}:${process.env.API_PORT}`
    );
});

module.exports = app;