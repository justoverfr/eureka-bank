import argon2 from 'argon2';

import { schema } from '@eureka-bank/db';

export async function validateUser(
  user: typeof schema.users.$inferSelect | undefined,
  password: string,
) {
  let isPasswordValid = false;

  if (user) {
    isPasswordValid = await argon2.verify(user.password, password);
  } else {
    // This is a dummy call to prevent timing attacks
    await argon2.verify('dummyHash', 'dummyPassword');
  }

  if (!user || !isPasswordValid) {
    throw new Error('Invalid credentials');
  }
}
