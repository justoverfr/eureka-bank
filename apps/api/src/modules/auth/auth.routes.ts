import { FastifyPluginAsync } from 'fastify';

import { registerHandler } from './auth.controller';
import { registerJson } from './auth.schema';

const authRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    '/register',
    {
      schema: registerJson,
    },
    registerHandler,
  );
};

export default authRoutes;
