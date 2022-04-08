require('dotenv').config(); 
const myClient = require('./managers/connection');
const Sentry = require("@sentry/node");

// or use es6 import statements
// import * as Sentry from '@sentry/node';

const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: "https://f536d4f790194e26ad6c6ac8a1900d9f@o1170626.ingest.sentry.io/6269213",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
var md5 =require('md5');
var app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
/* app.use(require('./middlewares/checkBody')); */
app.use(process.env.ROOT, require('./routes'));
app.listen(3001, () => {
console.log('Working!!!');
myClient()
});