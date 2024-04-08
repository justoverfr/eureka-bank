import { FastifyPluginAsync } from 'fastify';

import { getUsersHandler } from './user.controller';

const friendRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', getUsersHandler);
};

export default friendRoutes;
