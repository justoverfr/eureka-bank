import Fastify from 'fastify';

import closeWithGrace from 'close-with-grace';

import { app, options } from './app';
import { Environment, envToLogger } from './utils/logger';

async function main() {
  console.log('process.env.NODE_ENV', await process.env.NODE_ENV);

  const server = Fastify({
    logger: envToLogger[(await process.env.NODE_ENV) as Environment] ?? false,
  });

  try {
    server.register(app, options);

    const PORT = (await process.env.BACKEND_PORT) || 3333;

    await server.listen({
      host: 'localhost',
      port: Number(PORT),
    });

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
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
