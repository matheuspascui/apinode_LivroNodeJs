import express from 'express';
import routes from '../routes/index.js'

import Home from './controller/Home.js'
import AppController from './controller/App.js'

const port = process.env.PORT? process.env.PORT : 3000;
const app = express();

// Built-in Middleware to Parse the Request's Body to obtain info (for PUT, POST, PATCH requests)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Using the Routes object (external module created to organize all the routes)
app.use(routes);

// In this example, the route only declares the ENDPOINT, delegating the responsibility for the processing to another function
// in our case, another method, called Home, imported through controller/Home.js
app.get('/', Home.index);

app.use(AppController.notFound);
app.use(AppController.handleError);

export default app;


// Middleware for favicon image
app.use((req, res, next) => {
    if (request.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end('');
    } else {
        next();
    }
});


// Middleware that creates the Error message and 404 Not found to pass it for the Error Middleware
app.use((req, res, next) => {
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error Middleware
app.use((err, req, res, next) => {
    if (err.status !== 404) console.log(err.stack);
    res.status(err.status || 500).json({err: err.message});
});

//LISTENER FOI RETIRADO PARA UM ARQUIVO INDIVIDUAL E ESPECIALIZADO PARA REFATORAR COM MELHORIAS
//app.listen(port, () => console.log(`\nServer is running on port ${port}...\n`));


