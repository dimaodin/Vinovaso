const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get("*", (req, res) => handler(req, res));
    server.post("*", (req, res) => handler(req, res));

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log('Listening on port', port);
    })
})