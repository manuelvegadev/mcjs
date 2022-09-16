import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { spawn } from 'child_process';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  const child = spawn('/bin/sh', {
    shell: true,
  });
  console.log('spawned');
  // console.log('🆕 Connection!')

  socket.on('terminal-command', ({ command }) => {
    console.log('⬅️');

    child.stdin.write(command + '\n');
    // child.stdin.end();
  });

  child.stdout.on('data', (data) => {
    // console.log('➡️')
    io.emit('terminal-output', data.toString());
  });

  // child.stdout.on('data', function(data) {
  //   console.log("Child data: " + data);
  // });
  // child.on('error', function () {
  //   console.log("Failed to start child.");
  // });
  // child.on('close', function (code) {
  //   console.log('Child process exited with code ' + code);
  // });
  // child.stdout.on('end', function () {
  //   console.log('Finished collecting data chunks.');
  // });
});

httpServer.listen(3000);
