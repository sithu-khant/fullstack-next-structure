import { Schema, model } from "mongoose";

export interface ISubscriptionSchema {
  emoji: string;
  name: string;
  provider: string;
  type: string;
  billingCycle: string;
  paymentMethod: string;
  dateFrom: string | null;
  dateTo: string | null;
  autoRenew: boolean;
  plan: string;
  cost: number;
  currency: string;
  website: string;
  notes: string;
}

const SubscriptionSchema = new Schema<ISubscriptionSchema>({
  emoji: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  billingCycle: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  dateFrom: {
    type: String,
    required: true
  },
  dateTo: {
    type: String,
    required: true
  },
  autoRenew: {
    type: Boolean,
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  }
});

const SubscriptionModel = model("subscriptions", SubscriptionSchema);

export default SubscriptionModel;
