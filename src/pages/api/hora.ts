import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(`
    <html>
      <head>
        <style>
          html {
            background-color: #333;
            color: #eee;
            font-size: 5rem;
          }
        </style>
      </head>
      <body>
          <strong>Hora certa...:</strong>
          ${new Date().toLocaleTimeString('pt-BR')}
      </body>
    </html>
  `)
}
