import { Hono } from 'hono';
import { poweredBy } from "hono/powered-by";
import { logger } from "hono/logger";

import dbConnect from './db/connect';
import SubscriptionModel from './db/subscription-model';
import { isValidObjectId } from 'mongoose';

const app = new Hono()
// Middlewares
app.use(poweredBy());
app.use(logger());

dbConnect()
  .then(() => {

    // Get all the subscriptions
    app.get("/", async (c) => {
      const subscriptions = await SubscriptionModel.find();

      return c.json(subscriptions.map((d) => d.toObject()), 200);
    })

    // Create a subscription
    app.post("/", async (c) => {
      const formData = await c.req.json();
      const subscriptionObj = new SubscriptionModel(formData);

      try {
        const document = await subscriptionObj.save();
        return c.json(document.toObject(), 201);
      } catch (err) {
        return c.text(`Error: ${(err as any)?.message}` || "Internal Server Error", 404);
      }
    })

    // View subscritions by ID
    app.get("/:subscriptionID", async (c) => {
      const id = c.req.param("subscriptionID");
      if (!isValidObjectId(id)) return c.json("Invalid ID", 400);

      const document = await SubscriptionModel.findById(id);
      if (!document) return c.json("Document not found", 404);

      return c.json(document.toObject(), 200);
    })

    // Update subscritions by ID
    app.patch("/:subscriptionID", async (c) => {
      const id = c.req.param("subscriptionID");
      if (!isValidObjectId(id)) return c.json("Invalid ID", 400);

      const document = await SubscriptionModel.findById(id);
      if (!document) return c.json("Document not found", 404);

      const formData = await c.req.json();

      try {
        const updatedDocument = await SubscriptionModel.findByIdAndUpdate(id, formData, { new: true });

        return c.json(updatedDocument?.toObject(), 200);
      } catch (err) {
        return c.text(`Error: ${(err as any)?.message}` || "Internal Server Error", 404);
      }
    })

    // Delete subscription by ID
    app.delete("/:subscriptionID", async (c) => {
      const id = c.req.param("subscriptionID");
      if (!isValidObjectId(id)) return c.json("Invalid ID", 400);

      try {
        const deletedDocument = await SubscriptionModel.findByIdAndDelete(id);

        return c.json(deletedDocument?.toObject(), 200);
      } catch (err) {
        return c.text(`Error: ${(err as any)?.message}` || "Internal Server Error", 404);
      }
    })


  })
  .catch(err => {
    app.get("/*", (c) => {
      return c.text(`Failed to connect mongodb: ${err.message}`);
    })
  })

app.onError((err, c) => {
  return c.text(`App Error: ${err.message}`);
})

// export default app;
export default {
  port: 3001,
  fetch: app.fetch,
}
