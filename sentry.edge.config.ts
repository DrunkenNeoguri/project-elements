import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: '',
  tracesSampleRate: 1,
  debug: false,
});
