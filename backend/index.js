import http from 'http';
import app from './app.js';

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
