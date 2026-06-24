import { NextResponse } from 'next/server'

const maintenanceHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Boyd Walston Construction</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #111111;
        color: #ffffff;
        font-family: Georgia, "Times New Roman", serif;
        padding: 2rem;
        text-align: center;
      }
      main { max-width: 32rem; }
      h1 {
        font-size: clamp(2rem, 6vw, 3rem);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      p {
        color: #9b9b9b;
        line-height: 1.7;
        font-family: system-ui, sans-serif;
        font-size: 1rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Boyd Walston Construction</h1>
      <p>This website is not published yet. Please check back soon.</p>
    </main>
  </body>
</html>`

export function middleware() {
  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
