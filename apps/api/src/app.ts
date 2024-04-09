import express from 'express';

import logger from 'pino-http';

import errorHandler from './middlewares/errorHandler';
import { authRoutes } from './modules/auth/auth.routes';
import { blockedUserRoutes } from './modules/blocked-users/blocked-user.routes';
import { contactRequestRoutes } from './modules/contact-requests/contact-request.routes';
import { contactRoutes } from './modules/contacts/contact.routes';
import { transactionRoutes } from './modules/transactions/transaction.routes';
import { userRoutes } from './modules/users/user.routes';

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
// app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
// app.use(helmet());
// app.use(rateLimiter);

// Request logging
// app.use(requestLogger());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/contact-requests', contactRequestRoutes);
app.use('/api/block-list', blockedUserRoutes);
app.use('api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
// app.use('/health-check', healthCheckRouter);
// app.use('/users', userRouter);

// Swagger UI
// app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());

export { app };
