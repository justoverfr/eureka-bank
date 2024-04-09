import { Router } from 'express';

import {
  getReceivedRequestsHandler,
  getSentRequestsHandler,
  sendContactRequestHandler,
} from './contact-request.controller';

const contactRequestRoutes = Router();
contactRequestRoutes.get('/received', getReceivedRequestsHandler);
contactRequestRoutes.get('/sent', getSentRequestsHandler);
contactRequestRoutes.post('/', sendContactRequestHandler);

/*
Accepter une demande de contact : POST /contact-requests/:id/accept
Refuser une demande de contact : DELETE /contact-requests/received/:id
Annuler une demande de contact : DELETE /contact-requests/sent/:id
*/

export { contactRequestRoutes };
