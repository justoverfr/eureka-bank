import { FastifyPluginAsync } from 'fastify';

import { users } from '@eureka-bank/db/schema';

import {
  getBlockedContactsHandler,
  getContactsHandler,
  getReceivedRequestsHandler,
  getSentRequestsHandler,
  sendContactRequestHandler,
} from './contact.controller';

const friendRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', getContactsHandler);
  fastify.post('/', sendContactRequestHandler);
  // fastify.delete('/:id', deleteContactHandler);

  fastify.get('/requests/received', getReceivedRequestsHandler);
  fastify.get('/requests/sent', getSentRequestsHandler);
};

/*Bloquer un utilisateur : POST /blocked-users
Débloquer un utilisateur : DELETE /blocked-users/:id
Liste des utilisateurs bloqués : GET /blocked-users

Envoyer une demande de contact : POST /contact-requests
Accepter une demande de contact : POST /contact-requests/:id/accept
Liste des demandes reçues : GET /contact-requests/received
Refuser une demande de contact : DELETE /contact-requests/received/:id
Liste des demandes envoyées : GET /contact-requests/sent
Annuler une demande de contact : DELETE /contact-requests/sent/:id
*/

export default friendRoutes;
