import { Router } from 'express';

import { deleteContactsHandler, getContactsHandler } from './contact.controller';

const contactRoutes = Router();

contactRoutes.get('/', getContactsHandler);
contactRoutes.delete('/', deleteContactsHandler);
// contactRoutes.delete('/:id', deleteContactHandler);

export { contactRoutes };
