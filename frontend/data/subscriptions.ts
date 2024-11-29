import { Subscription } from "@/constants/types";

export const placeholderSubscriptions: Subscription[] = [
  {
    name: 'Netflix',
    provider: 'Netflix',
    type: 'Streaming',
    billingCycle: 'Monthly',
    paymentMethod: 'Credit Card',
    dateFrom: '2023-11-28',
    dateTo: null,
    autoRenew: true,
    plan: 'Standard',
    cost: 15.99,
    currency: 'USD',
    website: 'https://www.netflix.com/',
    category: 'Streaming'
  },
  {
    name: 'Spotify Premium',
    provider: 'Spotify',
    type: 'Music Streaming',
    billingCycle: 'Monthly',
    paymentMethod: 'Direct Debit',
    dateFrom: '2023-09-15',
    dateTo: null,
    autoRenew: true,
    plan: 'Premium Individual',
    cost: 9.99,
    currency: 'USD',
    website: 'https://www.spotify.com/',
    category: 'Music'
  },
  {
    name: 'Microsoft 365',
    provider: 'Microsoft',
    type: 'Software',
    billingCycle: 'Annually',
    paymentMethod: 'Credit Card',
    dateFrom: '2023-10-01',
    dateTo: '2024-10-01',
    autoRenew: true,
    plan: 'Microsoft 365 Personal',
    cost: 69.99,
    currency: 'USD',
    website: 'https://www.microsoft.com/en-us/microsoft-365',
    category: 'Productivity'
  },
  // Add more placeholder subscriptions as needed
];