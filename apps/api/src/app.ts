import express, { NextFunction, Request, Response } from 'express';

import logger from 'pino-http';

import authRoutes from './modules/auth/auth.routes';

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
// app.use('/health-check', healthCheckRouter);
// app.use('/users', userRouter);

// Swagger UI
// app.use(openAPIRouter);

// Error handlers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log de l'erreur pour le débogage
  res.status(500).json({
    // Vous pouvez personnaliser le statut en fonction de l'erreur si vous le souhaitez
    success: false,
    error: {
      message: err.message,
      // Vous pouvez ajouter d'autres détails ici si nécessaire
    },
  });
});

// app.use(errorHandler());

export { app };
