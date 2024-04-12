import express, { Router } from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import logger from 'pino-http';

import errorHandler from './middlewares/errorHandler';
import { authRoutes } from './modules/auth/auth.routes';
import { blockedUserRoutes } from './modules/blocked-users/blocked-user.routes';
import { contactRequestRoutes } from './modules/contact-requests/contact-request.routes';
import { contactRoutes } from './modules/contacts/contact.routes';
import { transactionRoutes } from './modules/transactions/transaction.routes';
import { userRoutes } from './modules/users/user.routes';

dotenv.config();

const app = express();
// Set the application to trust the reverse proxy
app.set('trust proxy', true);

// Middlewares
app.use(
  logger({
    transport: {
      target: 'pino-pretty',
      options: { translateTime: 'HH:MM:ss Z', ignore: 'pid,hostname' },
    },
  }),
);
app.use(express.json());
app.use(
  cors({
    origin: process.env.WEB_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);
// app.use(helmet());
// app.use(rateLimiter);

// Request logging
// app.use(requestLogger());

// Routes
const apiRoutes = Router();
const apiVersion = '1';

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/contacts', contactRoutes);
apiRoutes.use('/contact-requests', contactRequestRoutes);
apiRoutes.use('/blocked-users', blockedUserRoutes);
apiRoutes.use('/users', userRoutes);
apiRoutes.use('/transactions', transactionRoutes);
// app.use('/health-check', healthCheckRouter);
// app.use('/users', userRouter);

app.use(`/api/v${apiVersion}`, apiRoutes);

// Swagger UI
// app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());

export { app };
