# Hyvve Frontend


## Overview

Hyvve is a token-incentivized data marketplace that connects AI researchers, companies, and everyday data contributors. On Hyvve, you can buy AI-ready data or sell your own for token rewards, all on a secure, decentralized platform.

## Project Snapshots

### Create Campaign
<img width="1440" alt="Screenshot 2025-03-01 at 2 51 56 PM" src="https://github.com/user-attachments/assets/2d34ee2b-b5a3-44ce-b601-5453e6fb4c5b" />

### Home
![Screenshot 2025-03-01 at 3 04 57 PM](https://github.com/user-attachments/assets/fa4745b6-e002-48a4-80a8-ea6eb7876dd0)

### Active Campaigns
![Screenshot 2025-03-01 at 3 06 38 PM](https://github.com/user-attachments/assets/2ee139f4-044e-4503-bfea-f59460327943)

### Campaign Page (viewing as owner)
![Screenshot 2025-03-01 at 3 08 49 PM](https://github.com/user-attachments/assets/f6c26302-d478-4f80-8142-76a95964d4fe)

### Campaign Page (viewing as contributor)
![Screenshot 2025-03-01 at 3 07 37 PM](https://github.com/user-attachments/assets/61dff99d-5850-4b82-a489-06b488f45a5d)

### Campaign Contributions
![Screenshot 2025-03-01 at 3 09 58 PM](https://github.com/user-attachments/assets/f22bc7e5-5d68-4cac-976c-d5450b3b690e)

### Hyvve Premium Subscription
![Screenshot 2025-03-01 at 3 13 52 PM](https://github.com/user-attachments/assets/4fe6b642-9031-42ed-8ef8-897ca47830a9)

### Premium Campaign Analytics page
![Screenshot 2025-03-01 at 3 11 27 PM](https://github.com/user-attachments/assets/a371a5b9-10b5-4896-92e2-925ddd3eac34)

### Bulk Export Contributed Data
<img width="1432" alt="Screenshot 2025-03-03 at 1 26 00 PM" src="https://github.com/user-attachments/assets/aa797cdd-80bb-403d-91f4-80746917dd8d" />


### Real time Profile Page
![Screenshot 2025-03-01 at 3 12 35 PM](https://github.com/user-attachments/assets/b814aff3-e532-45c5-8979-9ea55dd10b6f)



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
