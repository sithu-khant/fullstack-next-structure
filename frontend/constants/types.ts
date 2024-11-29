export interface Subscription {
  name: string;
  provider: string;
  type: string;
  billingCycle: string;
  paymentMethod: string;
  startDate: string;
  endDate: string | null;
  autoRenew: boolean;
  plan: string;
  cost: number;
  paymentCurrency: string;
  website: string;
  category: string;
  notes?: string;
}