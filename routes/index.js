import { Router } from "express";

const routes = new Router();

routes.get('/favicon.ico', (req, res, next) => {
    res.writeHead(200, {'Content-Type: ': 'image/x-icon'});
    res.end();
});

export default routes;