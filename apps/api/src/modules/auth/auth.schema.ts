import { z } from 'zod';

import { schema } from '@eureka-bank/db';

type NewUser = typeof schema.users.$inferInsert;

export const registerBodySchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email',
    }),
  password: z.string({
    required_error: 'Password is required',
  }),
  firstName: z.string({
    required_error: 'First name is required',
  }),
  lastName: z.string({
    required_error: 'Last name is required',
  }),
  phone: z.string({
    required_error: 'Phone is required',
  }),
}) satisfies z.ZodType<NewUser>;

export type RegisterBody = z.infer<typeof registerBodySchema>;
