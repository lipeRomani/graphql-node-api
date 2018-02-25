import app from './app';
import * as http from 'http';
import { normalizePort, onError, onListening } from './utils/serverUtils';

const server = http.createServer(app);
const port = normalizePort(process.env.prot || 3000);

server.listen(3000);
server.on('error', onError(server));
server.on('listening', onListening(server));
