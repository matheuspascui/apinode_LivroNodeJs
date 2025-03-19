import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Ola s');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`\nServer is running on port ${port}...\n`));


