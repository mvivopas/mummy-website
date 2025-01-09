import * as Sentry from "@sentry/astro";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: "https://6c60b87303a6232796fc983168c7b06c@o4508393660022784.ingest.de.sentry.io/4508393662906448",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],

  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
  
  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0
});
