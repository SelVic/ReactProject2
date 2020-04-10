const express = require('express'),
    helmet = require('helmet'),
    compression = require('compression'),
    app = express(),
    http = require('http'),
    path = require('path'),
    server = http.createServer(app);

app.use(helmet());
app.use(compression());

function X (req, res, next) {
    //
    next()
}

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.get('/test', (req, res) => {
    res.send({name: 'Vasya'});
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use(function (req, res, next) {
    console.error("сработало 404");
    res.sendStatus(404);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() < 500)
        res.status(500);
    res.send(err.userMessage);
});

server.listen(3000, function () {
    console.log(`Приложение запущено http://localhost:3000`);
});