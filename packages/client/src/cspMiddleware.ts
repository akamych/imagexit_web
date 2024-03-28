import type { IncomingMessage, ServerResponse } from 'http'

type Middleware = (req: IncomingMessage, res: ServerResponse, next: () => void) => void

const cspMiddleware: Middleware = (req, res, next) => {
  const domain = process.env.DOMAIN
  // const clientPort = process.env.CLIENT_PORT
  const serverPort = process.env.SERVER_PORT
  res.setHeader(
    'Content-Security-Policy',
    `default-src 'self' data: ${domain}:${serverPort} https://ya-praktikum.tech https://oauth.yandex.ru;
     script-src 'self' 'unsafe-inline' ${domain}:${serverPort}  ;
     style-src 'self' 'unsafe-inline';
     img-src 'self';
     font-src 'self';
     connect-src 'self' ${domain}:${serverPort} https://ya-praktikum.tech https://oauth.yandex.ru`
  )
  next()
}
/** 
default-src 'self' data: ${domain}:${serverPort} - разрешает загрузку контента с текущего домена и порта клиента + загрузку скриптов и других ресурсов с ${domain}:${serverPort}, а также использование application/json в качестве типа контента.
script-src 'self' 'unsafe-inline' ${domain}:${serverPort}  - разрешает загрузку скриптов с текущего домена и порта клиента + встроенных скриптов (с помощью 'unsafe-inline') + использование application/json в качестве типа контента.
style-src 'self' 'unsafe-inline'  - разрешает загрузку стилей с текущего домена и порта клиента, а также встроенных стилей (с помощью 'unsafe-inline').
img-src 'self'  - разрешает загрузку изображений с текущего домена и порта клиента, а также из данных (с помощью data:).
font-src 'self'   - разрешает загрузку шрифтов с текущего домена и порта клиента 
connect-src 'self' ${domain}:${serverPort} - разрешает запросы к ${domain}:${serverPort} через WebSocket, EventSource, XMLHttpRequest и Fetch API.
 */
export default cspMiddleware
