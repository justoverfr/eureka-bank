import { FastifyPluginAsync } from 'fastify';

import { signupHandler } from './auth.controller';
import { registerJson } from './auth.schema';

const authRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    '/signup',
    {
      schema: registerJson,
    },
    signupHandler,
  );
};

export default authRoutes;
