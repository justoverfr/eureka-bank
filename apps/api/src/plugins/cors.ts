import fastifyCors from '@fastify/cors';
import fp from 'fastify-plugin';

/**
 * This plugins define the CORS policy for the API.
 *
 * @see https://github.com/fastify/fastify-cors
 */
export default fp(async (fastify) => {
  fastify.register(fastifyCors, {
    origin: 'http://localhost:3000',
  });
});
