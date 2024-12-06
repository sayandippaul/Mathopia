import { Server } from 'socket.io';

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('Nennw client connected');
      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        // io.emit('message', msg);
      });
      socket.on('startexam', (setno) => {
        console.log("exam starteed"+setno);
        io.emit('startexam',setno);
      });
      // socket.on('setstudent',(setno))
      socket.on('extendtime', (p) => {
        console.log("exam extended"+p.setno+" "+p.time);
        io.emit('extendtime',{setno:p.setno,time:p.time});
      });
      socket.on('endexam', (setno) => {
        console.log("exam ended"+setno);
        io.emit('endexam',setno);
      });
      
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }
  res.end();
}