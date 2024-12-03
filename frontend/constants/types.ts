export interface Subscription {
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
  notes?: string;
}