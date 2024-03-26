import Fastify from 'fastify';

import closeWithGrace from 'close-with-grace';

import { app, options } from './app';

async function main() {
  const server = Fastify({
    logger: true,
  });

  try {
    server.register(app, options);

    await server.listen({ host: 'localhost', port: 3333 });

    closeWithGrace(
      {
        delay: 500,
        logger: { error: (m) => console.error(`[close-with-grace] ${m}`) },
      },
      async ({ signal, err, manual }) => {
        if (err) {
          console.error(err);
        }
        await server.close();
        process.exit(err ? 1 : 0);
      },
    );

    console.log(`Server listening on http://localhost:3333`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
