import { Router } from 'express';

import { getContactsHandler } from './contact.controller';

const contactRoutes = Router();

contactRoutes.get('/', getContactsHandler);
// contactRoutes.delete('/:id', deleteContactHandler);

export { contactRoutes };
