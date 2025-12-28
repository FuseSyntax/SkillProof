# SkillProof - Complete File Structure

> AI + Blockchain Hiring Trust Platform - "The Trust Layer for Remote Hiring"

## 📁 Project Overview

This is a monorepo containing three main packages:
- **Frontend**: Next.js 14 application (React, TypeScript, styled-components)
- **Backend**: NestJS API (Node.js, TypeScript, PostgreSQL)
- **AI Service**: Python/FastAPI service for AI-powered interviews

---

## 🌳 Complete Directory Structure

```
SkillProof/
│
├── 📄 package.json                    # Root monorepo configuration
├── 📄 package-lock.json               # Dependency lock file
├── 📄 .gitignore                     # Git ignore rules
├── 📄 .prettierrc                    # Code formatting configuration
├── 📄 docker-compose.yml             # Docker services (PostgreSQL, Redis)
├── 📄 README.md                      # Project overview and documentation
├── 📄 FILE_STRUCTURE.md              # This file - complete structure
│
├── 📁 App_Flow/                      # Application workflow documentation
│   ├── APP_FLOW_BREAKDOWN.md        # Flow structure breakdown
│   ├── APP_FLOW_PART1.md            # Part 1: Landing, Auth, Candidate, AI Interview
│   ├── APP_FLOW_PART2.md            # Part 2: Blockchain, Public Profile, Employer
│   └── APP_FLOW_PART3.md            # Part 3: Error Handling, User Journeys, Data Flow
│
├── 📁 packages/                      # Monorepo packages
│   │
│   ├── 📁 frontend/                  # Next.js 14 Frontend Application
│   │   ├── 📄 package.json           # Frontend dependencies
│   │   ├── 📄 tsconfig.json          # TypeScript configuration
│   │   ├── 📄 next.config.js         # Next.js configuration
│   │   ├── 📄 next-env.d.ts          # Next.js type definitions
│   │   ├── 📄 .env.local            # Environment variables (local)
│   │   ├── 📄 .env.example           # Environment variables template
│   │   │
│   │   ├── 📁 src/                   # Source code
│   │   │   │
│   │   │   ├── 📁 app/               # Next.js App Router pages
│   │   │   │   ├── 📄 layout.tsx     # Root layout with providers
│   │   │   │   ├── 📄 page.tsx       # Landing page (/)
│   │   │   │   ├── 📄 globals.css    # Global styles
│   │   │   │   ├── 📄 registry.tsx  # Styled-components SSR registry
│   │   │   │   ├── 📄 not-found.tsx  # 404 error page
│   │   │   │   │
│   │   │   │   ├── 📁 login/         # Login page
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 signup/        # Signup page
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 dashboard/     # Dashboard pages
│   │   │   │   │   ├── 📁 candidate/
│   │   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │   └── 📁 employer/
│   │   │   │   │       └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 profile/       # Profile pages
│   │   │   │   │   ├── 📄 page.tsx   # Profile settings
│   │   │   │   │   └── 📁 public/
│   │   │   │   │       └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 interview/     # Interview flow
│   │   │   │   │   ├── 📁 [sessionId]/
│   │   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │   └── 📁 results/
│   │   │   │   │       └── 📁 [sessionId]/
│   │   │   │   │           └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 verify-skill/ # Start verification
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 features/     # Marketing pages
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 pricing/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 how-it-works/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 about/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 blog/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 careers/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 help/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 contact/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 privacy/
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   │
│   │   │   │   └── 📁 terms/
│   │   │   │       └── 📄 page.tsx
│   │   │   │
│   │   │   ├── 📁 components/        # React components
│   │   │   │   │
│   │   │   │   ├── 📁 ui/            # Reusable UI components
│   │   │   │   │   ├── 📄 Button.tsx
│   │   │   │   │   ├── 📄 Card.tsx
│   │   │   │   │   ├── 📄 Input.tsx
│   │   │   │   │   ├── 📄 Badge.tsx
│   │   │   │   │   ├── 📄 Modal.tsx
│   │   │   │   │   ├── 📄 Toast.tsx
│   │   │   │   │   ├── 📄 Select.tsx
│   │   │   │   │   ├── 📄 LoadingSpinner.tsx
│   │   │   │   │   ├── 📄 ProgressBar.tsx
│   │   │   │   │   └── 📄 Tabs.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 layout/        # Layout components
│   │   │   │   │   ├── 📄 Header.tsx
│   │   │   │   │   └── 📄 Footer.tsx
│   │   │   │   │
│   │   │   │   ├── 📁 interview/     # Interview-specific components
│   │   │   │   │   ├── 📄 CodeEditor.tsx
│   │   │   │   │   ├── 📄 QuestionDisplay.tsx
│   │   │   │   │   └── 📄 TestResults.tsx
│   │   │   │   │
│   │   │   │   └── 📁 blockchain/    # Blockchain/NFT components
│   │   │   │       ├── 📄 NFTBadge.tsx
│   │   │   │       ├── 📄 WalletConnect.tsx
│   │   │   │       └── 📄 VerificationStatus.tsx
│   │   │   │
│   │   │   ├── 📁 theme/             # Design system
│   │   │   │   └── 📄 theme.ts       # Colors, typography, spacing, etc.
│   │   │   │
│   │   │   ├── 📁 lib/               # Utilities and helpers
│   │   │   │   └── 📄 api.ts         # API client with interceptors
│   │   │   │
│   │   │   ├── 📁 store/             # State management (Zustand)
│   │   │   │   └── 📄 authStore.ts   # Authentication state
│   │   │   │
│   │   │   └── 📁 types/             # TypeScript type definitions
│   │   │       └── 📄 index.ts        # Shared types (User, Profile, etc.)
│   │   │
│   │   ├── 📁 .next/                 # Next.js build output (generated)
│   │   └── 📁 node_modules/          # Frontend dependencies
│   │
│   ├── 📁 backend/                   # NestJS Backend API
│   │   ├── 📄 package.json           # Backend dependencies
│   │   ├── 📄 tsconfig.json          # TypeScript configuration
│   │   ├── 📄 nest-cli.json          # NestJS CLI configuration
│   │   ├── 📄 .env                   # Environment variables
│   │   ├── 📄 .env.example           # Environment variables template
│   │   ├── 📄 .prettierrc            # Code formatting
│   │   ├── 📄 .eslintrc.js           # ESLint configuration
│   │   │
│   │   ├── 📁 src/                   # Source code
│   │   │   ├── 📄 main.ts            # Application entry point
│   │   │   ├── 📄 app.module.ts      # Root module
│   │   │   ├── 📄 app.controller.ts  # Root controller
│   │   │   ├── 📄 app.service.ts     # Root service
│   │   │   ├── 📄 data-source.ts     # TypeORM data source
│   │   │   │
│   │   │   ├── 📁 database/           # Database module
│   │   │   │   └── 📄 database.module.ts
│   │   │   │
│   │   │   ├── 📁 users/             # User management module
│   │   │   │   ├── 📁 entities/
│   │   │   │   │   └── 📄 user.entity.ts
│   │   │   │   ├── 📁 dto/           # Data Transfer Objects (to be created)
│   │   │   │   ├── 📁 controllers/   # Controllers (to be created)
│   │   │   │   ├── 📁 services/      # Services (to be created)
│   │   │   │   └── 📁 users.module.ts # Module definition (to be created)
│   │   │   │
│   │   │   ├── 📁 auth/              # Authentication module (to be created)
│   │   │   │   ├── 📁 strategies/    # Passport strategies
│   │   │   │   ├── 📁 guards/        # Auth guards
│   │   │   │   ├── 📁 decorators/    # Custom decorators
│   │   │   │   └── 📁 auth.module.ts
│   │   │   │
│   │   │   ├── 📁 candidates/        # Candidate module (to be created)
│   │   │   │   ├── 📁 entities/
│   │   │   │   ├── 📁 dto/
│   │   │   │   ├── 📁 controllers/
│   │   │   │   └── 📁 services/
│   │   │   │
│   │   │   ├── 📁 employers/         # Employer module (to be created)
│   │   │   │   ├── 📁 entities/
│   │   │   │   ├── 📁 dto/
│   │   │   │   ├── 📁 controllers/
│   │   │   │   └── 📁 services/
│   │   │   │
│   │   │   ├── 📁 interviews/         # Interview module (to be created)
│   │   │   │   ├── 📁 entities/
│   │   │   │   ├── 📁 dto/
│   │   │   │   ├── 📁 controllers/
│   │   │   │   └── 📁 services/
│   │   │   │
│   │   │   ├── 📁 verifications/     # Verification module (to be created)
│   │   │   │   ├── 📁 entities/
│   │   │   │   ├── 📁 dto/
│   │   │   │   ├── 📁 controllers/
│   │   │   │   └── 📁 services/
│   │   │   │
│   │   │   ├── 📁 blockchain/       # Blockchain integration (to be created)
│   │   │   │   ├── 📁 services/
│   │   │   │   └── 📁 blockchain.module.ts
│   │   │   │
│   │   │   └── 📁 migrations/        # Database migrations
│   │   │       └── 📄 1766879620396-InitialSchema.ts
│   │   │
│   │   ├── 📁 dist/                  # Compiled JavaScript (generated)
│   │   └── 📁 node_modules/          # Backend dependencies
│   │
│   └── 📁 ai-service/                # Python/FastAPI AI Service
│       ├── 📄 main.py                # FastAPI application entry point
│       ├── 📄 requirements.txt       # Python dependencies
│       ├── 📄 README.md              # AI service documentation
│       ├── 📄 .env                   # Environment variables
│       ├── 📄 .env.example           # Environment variables template
│       │
│       ├── 📁 services/              # AI services (to be created)
│       │   ├── 📄 question_generator.py
│       │   ├── 📄 code_evaluator.py
│       │   ├── 📄 code_executor.py
│       │   └── 📄 skill_scorer.py
│       │
│       ├── 📁 models/                # ML models (to be created)
│       │   └── 📄 ...
│       │
│       ├── 📁 utils/                 # Utilities (to be created)
│       │   ├── 📄 docker_client.py
│       │   └── 📄 llm_client.py
│       │
│       └── 📁 venv/                  # Python virtual environment (generated)
│
├── 📁 contracts/                     # Solidity Smart Contracts (to be created)
│   ├── 📁 contracts/
│   │   ├── 📄 SkillProofNFT.sol      # ERC-721 NFT contract
│   │   └── 📄 VerificationContract.sol
│   ├── 📁 scripts/
│   │   └── 📄 deploy.js
│   ├── 📁 test/
│   │   └── 📄 SkillProofNFT.test.js
│   ├── 📄 hardhat.config.js
│   └── 📄 package.json
│
├── 📁 docs/                          # Additional documentation (to be created)
│   ├── 📄 API.md                     # API documentation
│   ├── 📄 DEPLOYMENT.md              # Deployment guide
│   └── 📄 ARCHITECTURE.md            # System architecture
│
└── 📁 node_modules/                  # Root dependencies
```

---

## 📦 Package Details

### 🎨 Frontend (`packages/frontend/`)

**Technology Stack:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- styled-components
- Zustand (state management)
- Ethers.js (blockchain)
- Axios (HTTP client)

**Key Directories:**
- `src/app/` - Next.js pages (20+ pages)
- `src/components/` - Reusable React components
- `src/theme/` - Design system
- `src/lib/` - Utilities and API client
- `src/store/` - State management
- `src/types/` - TypeScript definitions

**Pages Created:**
- Public: Landing, Features, Pricing, How It Works, About, Blog, Careers
- Support: Help, Contact, Privacy, Terms
- Auth: Login, Signup
- Candidate: Dashboard, Profile, Public Profile, Verify Skill, Interview, Results
- Employer: Dashboard
- Error: 404 Not Found

**Components Created:**
- UI: Button, Card, Input, Badge, Modal, Toast, Select, LoadingSpinner, ProgressBar, Tabs
- Layout: Header, Footer
- Interview: CodeEditor, QuestionDisplay, TestResults
- Blockchain: NFTBadge, WalletConnect, VerificationStatus

---

### ⚙️ Backend (`packages/backend/`)

**Technology Stack:**
- NestJS (Node.js framework)
- TypeScript
- TypeORM (database ORM)
- PostgreSQL (database)
- Redis (caching)
- Passport (authentication)
- JWT (tokens)

**Key Directories:**
- `src/` - Source code
- `src/users/` - User management (partially implemented)
- `src/migrations/` - Database migrations
- `dist/` - Compiled output

**Modules to Create:**
- `auth/` - Authentication & authorization
- `candidates/` - Candidate management
- `employers/` - Employer management
- `interviews/` - Interview management
- `verifications/` - Skill verification
- `blockchain/` - Blockchain integration

**API Endpoints (to be implemented):**
- `/api/auth/*` - Authentication endpoints
- `/api/users/*` - User management
- `/api/candidates/*` - Candidate operations
- `/api/employers/*` - Employer operations
- `/api/interviews/*` - Interview management
- `/api/verifications/*` - Verification operations
- `/api/health` - Health check

---

### 🤖 AI Service (`packages/ai-service/`)

**Technology Stack:**
- Python 3.10+
- FastAPI (web framework)
- OpenAI API / LLM APIs
- Docker (code execution sandbox)
- Redis (caching)

**Key Files:**
- `main.py` - FastAPI application
- `requirements.txt` - Python dependencies

**Services to Create:**
- `question_generator.py` - Generate coding questions
- `code_evaluator.py` - Evaluate code submissions
- `code_executor.py` - Execute code in Docker sandbox
- `skill_scorer.py` - Calculate skill scores

**Endpoints (to be implemented):**
- `POST /api/interviews/generate-question` - Generate question
- `POST /api/interviews/evaluate` - Evaluate code
- `POST /api/interviews/execute` - Execute code
- `GET /health` - Health check

---

### ⛓️ Blockchain (`contracts/` - to be created)

**Technology Stack:**
- Solidity
- Hardhat (development framework)
- Ethers.js
- Polygon / Base network

**Contracts to Create:**
- `SkillProofNFT.sol` - ERC-721 NFT contract
- `VerificationContract.sol` - On-chain verification

---

## 📊 File Statistics

### Frontend
- **Pages**: 20+ pages
- **Components**: 20+ components
- **Lines of Code**: ~5,000+ lines

### Backend
- **Modules**: 1 (users) partially implemented
- **Entities**: 1 (user.entity.ts)
- **Migrations**: 1 (InitialSchema)

### AI Service
- **Main File**: 1 (main.py)
- **Endpoints**: 4 placeholder endpoints

---

## 🔧 Configuration Files

### Root Level
- `package.json` - Monorepo workspace configuration
- `.gitignore` - Git ignore rules
- `.prettierrc` - Code formatting
- `docker-compose.yml` - Docker services

### Frontend
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables

### Backend
- `nest-cli.json` - NestJS CLI configuration
- `tsconfig.json` - TypeScript configuration
- `.env` - Environment variables

### AI Service
- `requirements.txt` - Python dependencies
- `.env` - Environment variables

---

## 📝 Documentation Files

### Project Documentation
- `README.md` - Project overview
- `FILE_STRUCTURE.md` - This file
- `OverView.txt` - Product overview
- `Features.txt` - Feature list
- `breakdown.txt` - Task breakdown

### Application Flow
- `App_Flow/APP_FLOW_BREAKDOWN.md` - Flow structure
- `App_Flow/APP_FLOW_PART1.md` - Part 1 documentation
- `App_Flow/APP_FLOW_PART2.md` - Part 2 documentation
- `App_Flow/APP_FLOW_PART3.md` - Part 3 documentation