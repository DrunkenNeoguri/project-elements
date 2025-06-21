interface Props {
  type: 'server' | 'client';
  context: string;
  error: Error;
}

export function sendErrorToSentry({ type, context, error }: Props) {
  const Sentry = require('@sentry/nextjs');
  const { message, stack } = error;

  Sentry.captureException(error, {
    tags: {
      type,
      context,
    },
    extra: {
      reason: message,
      stack,
    },
  });
}
