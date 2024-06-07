import {
  Response as ExpressResponse,
  Request as ExpressRequest,
} from 'express';
import { generateCodeVerifier, generateState } from 'arctic';

import type { ProviderConfig } from 'wasp/auth/providers/types';

import { setOAuthCookieValue, getOAuthCookieValue } from './cookies.js';

/**
 * OAuth state shape depends on whether the provider uses PKCE.
 * If a provider uses PKCE, the state will include a code verifier.
 */
export type OAuthState<UsesCodeVerifier extends boolean = false> = {
  state: string;
} & (UsesCodeVerifier extends true
  ? { codeVerifier: string }
  : {});

export type OAuthStateType = keyof OAuthState<true>;

export function generateAndStoreOAuthState<IsCodeVerifierUsed extends boolean>({
  isCodeVerifierUsed,
  provider,
  res,
}: {
  isCodeVerifierUsed: IsCodeVerifierUsed,
  provider: ProviderConfig,
  res: ExpressResponse
}): OAuthState<IsCodeVerifierUsed> {
  const state = generateState();
  setOAuthCookieValue(provider, res, 'state', state);

  return {
    state,
    ...(isCodeVerifierUsed && generateAndStoreCodeVerifier(provider, res)),
  };
}

export function validateAndGetOAuthState<IsCodeVerifierUsed extends boolean>({
  isCodeVerifierUsed,
  provider,
  req,
}: {
  isCodeVerifierUsed: IsCodeVerifierUsed,
  provider: ProviderConfig,
  req: ExpressRequest
}): OAuthState<IsCodeVerifierUsed> & {
  code: string;
} {
  const code = req.query.code;
  if (typeof code !== 'string') {
    throw new Error('Invalid code');
  }

  const state = req.query.state;
  const storedState = getOAuthCookieValue(provider, req, 'state');
  if (!state || !storedState || storedState !== state) {
    throw new Error('Invalid state');
  }

  return {
    state,
    code,
    ...(isCodeVerifierUsed && validateAndGetCodeVerifier(provider, req)),
  };
}

function generateAndStoreCodeVerifier(
  provider: ProviderConfig,
  res: ExpressResponse
) {
  const codeVerifier = generateCodeVerifier();
  setOAuthCookieValue(provider, res, 'codeVerifier', codeVerifier);

  return { codeVerifier };
}

function validateAndGetCodeVerifier(
  provider: ProviderConfig,
  req: ExpressRequest
) {
  const codeVerifier = getOAuthCookieValue(
    provider,
    req,
    'codeVerifier'
  );
  if (!codeVerifier) {
    throw new Error('Missing code verifier');
  }
  return { codeVerifier };
}