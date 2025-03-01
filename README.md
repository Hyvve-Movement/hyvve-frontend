# Hyvve Frontend


## Overview

Hyvve is a token-incentivized data marketplace that connects AI researchers, companies, and everyday data contributors. On Hyvve, you can buy AI-ready data or sell your own for token rewards, all on a secure, decentralized platform.

## Project Snapshots

### Create Campaign
<img width="1440" alt="Screenshot 2025-03-01 at 2 51 56 PM" src="https://github.com/user-attachments/assets/2d34ee2b-b5a3-44ce-b601-5453e6fb4c5b" />


## Technology Stack

- **Framework**: Next.js 14.2.1
- **UI**: React 18, Tailwind CSS
- **Blockchain Interaction**: Aptos (via @aptos-labs/ts-sdk and @aptos-labs/wallet-adapter-react)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **File Storage**: Pinata IPFS (for metadata and contribution data)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- An Movement-compatible wallet browser extension (e.g., Razor, Nightly)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hyvve-Movement/hyvve-frontend.git
   cd hyvve-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file based on the `.env` template with the following variables:

   ```
   NEXT_PUBLIC_CAMPAIGN_MANAGER_ADDRESS=<campaign-manager-module-address>
   NEXT_PUBLIC_NODE_URL=<movement-rpc>
   NEXT_PUBLIC_PINATA_API_KEY=<your-pinata-api-key>
   NEXT_PUBLIC_PINATA_SECRET_API_KEY=<your-pinata-secret-key>
   NEXT_PUBLIC_BACKEND_BASE_URL=<backend-url>
   NEXT_PUBLIC_IS_TESTNET=true/false
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Next.js API Routes
We built some API routes, some of which use the aptos sdk for easy querying data on the Movement Bardock testnet:

### Activity APIs
- **GET /api/campaign/getUserActivity**

### Campaign APIs

- **GET /api/campaign/getCampaignContributions**
- **GET /api/campaign/getUserReputation**
- **GET /api/campaign/getRemainingBudget**

### Submission APIs

- **POST /api/submission/uploadToIpfs**
- **POST /api/submission/encryptSubmission**

### Reputation APIs
- **GET /api/reputation/getReputationInfo**: 
- **GET /api/reputation/getUserActivity**:
- **GET /api/reputation/getUserBadges**:
- **GET /api/reputation/getUserStats**: 

### Subscription APIs
- **GET /api/subscription/getSubscriptionStatus**

### Admin APIs

- **POST /api/admin/process-due-subscription**: Admin-only endpoint called by our automation service to process subscriptions

## License

[MIT](LICENSE)
