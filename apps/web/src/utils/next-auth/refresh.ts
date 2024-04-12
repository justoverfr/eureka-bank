import { JWT } from 'next-auth/jwt';

export async function refreshTokens(token: JWT): Promise<JWT> {
  const res = await fetch(`${process.env.API_URL}/api/v1/auth/refresh`, {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.tokens.refreshToken}`,
    },
  });
  console.log('refreshed');

  const response = await res.json();

  return {
    ...token,
    tokens: response,
  };
}
