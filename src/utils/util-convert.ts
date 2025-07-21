import { sendErrorToSentry } from './util-sentry';

export const normalizeError = (error: unknown, context: string, type?: 'server' | 'client') => {
  sendErrorToSentry({
    type: type ?? 'server',
    context,
    error,
  });

  return error instanceof Error ? error : new Error(`Uncaught Error: ${String(error)}`);
};
