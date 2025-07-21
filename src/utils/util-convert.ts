import { sendErrorToSentry } from './util-sentry';

export const convertTypedErrorUnknownToError = (error: unknown, context: string) => {
  sendErrorToSentry({
    type: 'server',
    context,
    error,
  });

  if (error instanceof Error) {
    return error;
  }
  return new Error(`Uncaught Error: ${String(error)}`);
};
