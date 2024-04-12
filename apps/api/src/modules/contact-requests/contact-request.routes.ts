import { Router } from 'express';

import {
  acceptContactRequestHandler,
  cancelContactRequestHandler,
  declineContactRequestHandler,
  getReceivedRequestsHandler,
  getSentRequestsHandler,
  sendContactRequestHandler,
} from './contact-request.controller';

const contactRequestRoutes = Router();
contactRequestRoutes.get('/received', getReceivedRequestsHandler);
contactRequestRoutes.get('/sent', getSentRequestsHandler);
contactRequestRoutes.post('/', sendContactRequestHandler);
contactRequestRoutes.post('/:id/accept', acceptContactRequestHandler);
contactRequestRoutes.delete('/received/:id', declineContactRequestHandler);
contactRequestRoutes.delete('/sent/:id', cancelContactRequestHandler);

export { contactRequestRoutes };
