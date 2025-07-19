import * as Sentry from '@sentry/nextjs';

interface Props {
  type: 'server' | 'client';
  context: string;
  error: unknown;
}

export function sendErrorToSentry({ type, context, error }: Props) {
  if (error instanceof Error) {
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
}
