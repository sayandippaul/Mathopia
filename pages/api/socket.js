// import { Server } from 'socket.io';

// export default function handler(req, res) {
//   if (!res.socket.server.io) {
//     const io = new Server(res.socket.server);
//     res.socket.server.io = io;

//     io.on('connection', (socket) => {
//       console.log('Nennw client connected');
      
//     });
//   }
//   res.end();
// }