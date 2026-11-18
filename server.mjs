/**
 * StudyBot LOCAL demo server (additional example code, not submitted original backend).
 * Node.js 20.6+; run via `npm start` after creating your local .env file.
 * Azure Direct Line SECRET stays in the server environment and never goes to the browser.
 * This server binds to loopback only and is NOT production-hardened.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const host = '127.0.0.1';
const port = Number(process.env.PORT || 3000);
const directLineSecret = process.env.DIRECT_LINE_SECRET;
const tokenApi = process.env.DIRECT_LINE_TOKEN_API ||
  'https://directline.botframework.com/v3/directline/tokens/generate';

const send = (res, status, content, contentType) => {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
  });
  res.end(content);
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);

  if (url.pathname === '/' || url.pathname === '/index.html') {
    if (req.method !== 'GET') return send(res, 405, 'Method not allowed', 'text/plain; charset=utf-8');
    try {
      const html = await readFile(join(root, 'index.html'));
      return send(res, 200, html, 'text/html; charset=utf-8');
    } catch {
      return send(res, 500, 'Index file missing', 'text/plain; charset=utf-8');
    }
  }

  if (url.pathname === '/api/directline-token') {
    if (req.method !== 'GET') return send(res, 405, '{"error":"method not allowed"}', 'application/json; charset=utf-8');
    if (!directLineSecret || directLineSecret.includes('REPLACE_ME')) {
      return send(res, 503, '{"error":"Azure Direct Line is not configured"}', 'application/json; charset=utf-8');
    }
    try {
      const upstream = await fetch(tokenApi, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${directLineSecret}`,
          'Content-Type': 'application/json'
        },
        body: '{}',
        signal: AbortSignal.timeout(10000)
      });
      if (!upstream.ok) {
        // Never forward upstream details or secrets to the browser.
        return send(res, 502, '{"error":"Azure token service unavailable"}', 'application/json; charset=utf-8');
      }
      const data = await upstream.json();
      if (!data.token || typeof data.token !== 'string') {
        return send(res, 502, '{"error":"No token returned"}', 'application/json; charset=utf-8');
      }
      return send(res, 200, JSON.stringify({ token: data.token }), 'application/json; charset=utf-8');
    } catch {
      return send(res, 502, '{"error":"Azure token request failed"}', 'application/json; charset=utf-8');
    }
  }

  return send(res, 404, 'Not found', 'text/plain; charset=utf-8');
});

server.listen(port, host, () => {
  console.log(`StudyBot local demo: http://${host}:${port}`);
  console.log('Local development only. Do not expose this token endpoint publicly without security hardening.');
});
