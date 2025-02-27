# Hive Subscription System

## Overview

The Hive platform includes a subscription system that allows users to access premium features. Subscriptions are managed through smart contracts on the Aptos blockchain.

## Features

- Multiple subscription tiers (basic, premium, etc.)
- Auto-renewal capability
- Payment delegation for gas-less renewals
- Admin-managed batch processing of due renewals

## Smart Contract Functions

The subscription system is implemented in the `subscription` module of the Campaign Manager smart contract.

### User Functions

- `create_subscription`: Create a new subscription with specified type and auto-renewal preference
- `create_subscription_with_delegation`: Create a subscription with payment delegation
- `renew_subscription`: Manually renew an existing subscription
- `cancel_subscription`: Cancel an active subscription
- `setup_payment_delegation`: Set up delegated payment for future renewals

### Admin Functions

- `process_due_renewals`: Process all subscriptions that are due for renewal
- `get_due_renewals_count`: Get the count of subscriptions due for renewal
- `is_admin`: Check if an address has admin privileges

## API Endpoints

### User Endpoints

- `GET /api/subscription/getSubscriptionStatus`: Get the current subscription status for a user

### Admin Endpoints

- `POST /api/admin/process-due-subscription`: Process all subscriptions that are due for renewal

## Subscription Lifecycle

1. **Creation**: User creates a subscription by calling `create_subscription`
2. **Active Period**: Subscription remains active for the specified duration (typically 30 days)
3. **Renewal**: When the subscription period ends:
   - If auto-renewal is enabled and funds are available, the subscription is renewed automatically
   - If auto-renewal is disabled, the user must manually renew
4. **Cancellation**: User can cancel at any time by calling `cancel_subscription`

## Payment Delegation

Payment delegation allows users to pre-approve funds for future subscription renewals:

1. User calls `setup_payment_delegation` with a specified amount
2. This amount is reserved for future subscription renewals
3. When renewal is due, the system uses these delegated funds instead of requiring a new transaction

## Automated Renewal Processing

The system includes an automated process for handling subscription renewals:

1. A cron job calls the `process-due-subscription` API endpoint daily
2. The endpoint calls the `process_due_renewals` smart contract function
3. All subscriptions that are due for renewal are processed in a single transaction

See [subscription-cron-setup.md](./subscription-cron-setup.md) for details on setting up the automation.

## Testing

You can test the subscription system using the provided scripts:

```bash
# Check subscription status
node scripts/process-due-subscriptions.js
```

## Troubleshooting

Common issues:

1. **Renewal Failed**: Check if the user has sufficient funds or if payment delegation is set up correctly
2. **Admin Access Denied**: Verify that the account has admin privileges in the smart contract
3. **Transaction Errors**: Check for proper gas fees and network connectivity

## Security Considerations

- The admin API is protected with an API key
- Private keys should be stored securely and never exposed
- Payment delegation limits should be set to reasonable amounts
