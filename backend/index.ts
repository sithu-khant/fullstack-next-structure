import { Hono } from 'hono';
import { poweredBy } from "hono/powered-by";
import { logger } from "hono/logger";

import dbConnect from './db/connect';
import SubscriptionModel from './db/subscription-model';

const app = new Hono()
// Middlewares
app.use(poweredBy());
app.use(logger());

dbConnect()
  .then(() => {
    console.log("Double checked");
  })
  .catch(err => {
    app.get("/*", (c) => {
      return c.text(`Failed to connect mongodb: ${err.message}`);
    })
  })

app.onError((err, c) => {
  return c.text(`App Error: ${err.message}`);
})

export default app;
