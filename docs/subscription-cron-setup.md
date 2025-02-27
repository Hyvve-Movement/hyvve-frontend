# Setting Up Automated Subscription Renewals

This document explains how to set up automated subscription renewal processing using cron jobs.

## Overview

The Hive platform includes a subscription system that requires regular processing of due renewals. The `process-due-subscription.ts` API endpoint handles this processing, and we can automate it using cron jobs.

## Prerequisites

- Access to a server where you can set up cron jobs
- Node.js installed on the server
- The Hive frontend codebase deployed
- Proper environment variables configured

## Environment Variables

Ensure these environment variables are set in your `.env` file:

```
NEXT_PUBLIC_APTOS_NODE_URL=<your_aptos_node_url>
FEE_PAYER_PRIVATE_KEY=<admin_private_key>
NEXT_PUBLIC_CAMPAIGN_MANAGER_ADDRESS=<campaign_manager_address>
SUBSCRIPTION_API_KEY=<secure_api_key>
NEXT_PUBLIC_BASE_URL=<your_api_base_url>
```

## Setting Up the Cron Job

### 1. Create a shell script wrapper

Create a file named `run-subscription-renewal.sh` in your project root:

```bash
#!/bin/bash
cd /path/to/your/hive-frontend
node scripts/process-due-subscriptions.js >> logs/subscription-renewals.log 2>&1
```

Make it executable:

```bash
chmod +x run-subscription-renewal.sh
```

### 2. Set up the cron job

Open your crontab:

```bash
crontab -e
```

Add a line to run the script daily at midnight:

```
0 0 * * * /path/to/your/hive-frontend/run-subscription-renewal.sh
```

This will run the subscription renewal process once per day at midnight.

## Alternative: Using a Cloud Scheduler

### AWS CloudWatch Events

1. Create a Lambda function that calls your API endpoint
2. Set up a CloudWatch Events rule to trigger the Lambda on schedule

### Google Cloud Scheduler

1. Create a Cloud Function that calls your API endpoint
2. Set up a Cloud Scheduler job to trigger the function on schedule

## Monitoring

- Check the logs at `logs/subscription-renewals.log`
- Set up alerts for any errors in the renewal process
- Monitor the blockchain transactions to ensure renewals are being processed

## Troubleshooting

If renewals aren't being processed:

1. Check the log file for errors
2. Verify the API key is correct
3. Ensure the admin account has sufficient funds for transaction fees
4. Verify the smart contract functions are working correctly

## Manual Triggering

You can manually trigger the renewal process by running:

```bash
node scripts/process-due-subscriptions.js
```

This is useful for testing or handling missed renewals.
