
# Verdant

<div align="center">
  <img src="./public/verdant_logo.png" alt="Verdant Logo" width="120" />
  <h3>Environmental Risk Mapping Platform</h3>
  <p>Empowering citizens with localized environmental risk awareness</p>
</div>

## 📋 Overview

Verdant is a user-friendly environmental risk mapping tool that addresses the lack of awareness and education about local environmental risks, endangered habitats, and pollutants. The application provides an interactive map interface that allows users to explore environmental data at the county level across the United States.

### 🌿 Key Features

- **Interactive Map**: Navigate a US map divided by counties with pan and zoom functionality
- **Environmental Risk Data**: Access location-specific information on environmental hazards, at-risk habitats, and pollutants
- **Customizable Filters**: Filter environmental risks by category to find specific information
- **User Accounts**: Save locations and risk information for future reference
- **Sharing Capabilities**: Share environmental risk information with others

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Drizzle ORM and Neon (serverless Postgres)
- **Authentication**: Clerk Authentication
- **Mapping**: Google Maps API
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL database (or Neon account)
- Google Maps API key
- Clerk API keys

### Installation

1. Clone the repository:
```bash
git clone https://github.com/verdant-org/verdant.git
cd verdant
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` with your configuration values:





```
# Database
DATABASE_URL=your_postgres_connection_string

# OAuth Keys

GOOGLE_CLIENT_ID="your-google-client"
GOOGLE_CLIENT_SECRET="your-google-secret"
GITHUB_CLIENT_ID="your-github-client"
GITHUB_CLIENT_SECRET="your-github-secret"
DISCORD_CLIENT_ID="your-discord-client"
DISCORD_CLIENT_SECRET="your-discord-secret"
BETTER_AUTH_SECRET="your-better-auth-secret"


# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Email (optional)
RESEND_API_KEY=your_resend_api_key
```

5. Run database migrations:
```bash
npx drizzle generate
# or
yarn drizzle generate
```

6. Start the development server:
```bash
npm run dev
# or
yarn dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

```
verdant/
├── .storybook/            # Storybook configuration
├── migrations/            # Database migrations
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app router pages and API routes
│   │   ├── api/           # Backend API endpoints
│   │   └── ...            # Frontend pages
│   ├── components/        # Reusable React components
│   │   ├── google/        # Google Maps components
│   │   ├── layout/        # Layout components
│   │   ├── ui/            # UI components (shadcn/ui)
│   │   └── ...
│   ├── config/            # Configuration files
│   ├── db/                # Database schemas and configuration
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and shared code
│   └── ...
├── .env.example           # Example environment variables
├── drizzle.config.ts      # Drizzle ORM configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── ...
```

## 🧑‍💻 Development Workflow

### Code Style

This project uses ESLint and TypeScript for code quality. Run the linter with:

```bash
npm run lint
# or
yarn lint
```

### Database Migrations

When making changes to the database schema:

1. Update the schema files in `src/db/schemas/`
2. Generate a new migration:
```bash
npx drizzle generate
# or
yarn drizzle generate
```

3. Apply the migration:
```bash
npx drizzle migrate
# or
yarn drizzle migrate
```

### Storybook

View and develop UI components in isolation with Storybook:

```bash
npm run storybook
# or
yarn storybook
```

## 🔄 API Endpoints

The application provides the following API endpoints:

- `/api/auth` - Authentication Catchall endpoint
- `/api/newsletter` - Newsletter subscription endpoint
- Additional endpoints for environmental data (see code for details)

<!-- ## 📊 Environmental Data Sources

TODO: Update with final datasets

Environmental risk data is sourced from:
- US Fish and Wildlife Service (USFWS)
- Environmental Protection Agency (EPA)
- Federal Emergency Management Agency (FEMA) -->

## 📝 Project Status

Current development status based on our sprint backlog:

- ✅ User authentication (creation, login)
- ✅ Google Maps integration
- ✅ Basic map navigation (pan/zoom)
- ✅ News letter subscription service
- 🚧 Database setup and migrations (in progress)
- 🚧 Environmental risk data integration (in progress)
- 🚧 User profile and preferences (in progress)
- 🚧 Collapsible side panel for filtering results (in progress)
- 📅 Advanced filtering and data visualization (planned)
- 📅 Sharing capabilities (planned)

## 👥 Team

Verdant is being developed by Group 6:
- Carlo Fraley
- Jason Tolen
- Preston Hemmy
- Amogh Allani

<!-- ## 📄 License


TODO (OPTIONAL): Add license

This project is licensed under the MIT License - see the LICENSE file for details. -->

---

<div align="center">
  <p>Verdant - Environmental Protection Through Education</p>
</div>