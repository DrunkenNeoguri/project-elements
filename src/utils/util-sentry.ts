import * as Sentry from '@sentry/nextjs';
import { FirebaseError } from 'firebase/app';

interface Props {
  type: 'server' | 'client';
  context: string;
  error: unknown;
}

export function sendErrorToSentry({ type, context, error }: Props) {
  if (error instanceof FirebaseError || error instanceof Error) {
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
