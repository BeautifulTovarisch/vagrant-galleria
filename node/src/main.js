/** Template Server.
  * A template node service build with the http package */ 

import {
  createServer,
  STATUS_CODES
} from 'http';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8080';

const cacheTTL = 3600 * 24;

const server = createServer({
  keepAlive: true
});

const setCors = res => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Max-Age', cacheTTL);
};

const optionsHandler = (req, res) => {
   res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': ['OPTIONS', 'POST'],
      'Access-Control-Allow-Headers': [
        'Accept',
        'Accept-Language',
        'Content-Type'
      ],
      'Access-Control-Max-Age': cacheTTL
    });

    return res.end();
};

server.on('request', (req, res) => {
  res.setHeader('Accept', 'text/plain');

  if (req.method === 'OPTIONS') {
    return optionsHandler(req, res);
  }

  setCors(res);

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');

    return res.end(`${STATUS_CODES[405]}\n`);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });

  return res.end({
    "hello": "world"
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on: ${HOST}:${PORT}`);
});

