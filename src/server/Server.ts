import express from 'express';


const server = express();

server.post('/teste', (_, res) => {
  return res.send('Olá, DEV!');
});

export { server };
