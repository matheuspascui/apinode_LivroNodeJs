import express from 'express';
import routes from 'routes/index.js'

import Home from './controller/Home.js'

const port = process.env.PORT? process.env.PORT : 3000;
const app = express();

// Built-in Middleware to Parse the Request's Body to obtain info (for PUT, POST, PATCH requests)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Using the Routes object (external module created to organize all the routes)
app.use(routes);

app.get('/', Home.index);

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


app.listen(port, () => console.log(`\nServer is running on port ${port}...\n`));


