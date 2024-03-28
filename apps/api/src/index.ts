import Fastify from 'fastify';

import closeWithGrace from 'close-with-grace';

import { app, options } from './app';

async function main() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
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
    server.log.info(process.env.SAUMON);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
