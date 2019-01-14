//#region requires
const http = require('http');
const path = require('path');
const express = require('express');
const engine = require('consolidate');
const websocketService = require('./services/websocket/websocket.service');
//#endregion

//#region constants
const PORT_NUMBER = 3000;
//#endregion

//#region app configuration
const app = express();

app.set('port', PORT_NUMBER);
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/game', express.static(path.join(__dirname, 'views/pong-game')));
app.use('/player', express.static(path.join(__dirname, 'views/device-event-with-angular')));
//#endregion

//#region routing
app.get('/', (req, res) => res.render('index'));
app.get('/game', (req, res) => res.render('game/index'));
app.get('/player', (req, res) => res.render('player/index'));
//#endregion

// Create application server
const server = http.createServer(app);

// WebSocket Initialization
websocketService.init(server);

server.listen(PORT_NUMBER, () => {
    console.info('Server running at', server.address());
});
