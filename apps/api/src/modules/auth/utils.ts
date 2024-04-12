import dotenv from 'dotenv';
import { SignJWT } from 'jose';

dotenv.config();

export async function getTokens(payload: Record<string, unknown>, rememberMe: boolean) {
  const accessToken = await new SignJWT(payload)
    .setIssuedAt()
    .setExpirationTime('5m')
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET as string));

  const refreshToken = await new SignJWT(payload)
    .setIssuedAt()
    .setExpirationTime(rememberMe ? '30d' : '1d')
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET as string));

  return { accessToken, refreshToken };
}
