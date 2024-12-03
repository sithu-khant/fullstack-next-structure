import { Hono } from 'hono';
import { poweredBy } from "hono/powered-by";
import { logger } from "hono/logger";

import dbConnect from './db/connect';
import SubscriptionModel from './db/subscription-model';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
