import closeWithGrace from 'close-with-grace';

import { app } from './app';

async function main() {
  try {
    const PORT = (await process.env.API_PORT) || 3333;

    const server = app.listen({
      host: 'localhost',
      port: Number(PORT),
    });
    console.log(`Server listening on http://localhost:${PORT}`);

    closeWithGrace(
      {
        delay: 500,
        logger: { error: (m) => console.error(`[close-with-grace] ${m}`) },
      },
      ({ signal, err, manual }) => {
        if (err) {
          console.error(err);
        }
        server.close(() => console.log(`Signal: ${signal}, manual: ${manual}`));
        process.exit(err ? 1 : 0);
      },
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
