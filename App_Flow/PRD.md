# Product Requirements Document (PRD)

## SkillProof — AI + Blockchain Hiring Trust Platform

**Version:** 1.0  
**Status:** Foundational  
**Owner:** Product Manager  
**Last Updated:** February 2025

---

## Document Purpose

This PRD is the **single source of truth** for SkillProof. It aligns engineering, design, and stakeholders on **what to build** and **why**, reducing ambiguity and preventing unnecessary work.

| Purpose | Benefit |
|--------|---------|
| **Alignment** | Ensures everyone from developers to marketing understands the product vision. |
| **Efficiency** | Reduces ambiguity and prevents unnecessary work, speeding up development. |
| **Risk Reduction** | Clarifies requirements, minimizing the risk of building the wrong thing. |

---

# 1. Purpose & Goals

## 1.1 Product Vision

**SkillProof** is *"The Trust Layer for Remote Hiring"* — an AI-powered skill verification platform that proves real developer skills through AI-driven coding interviews and stores verified proof on blockchain as tamper-proof credentials (SkillProof NFTs).

**Concept:** LinkedIn + GitHub + AI Interviewer + Blockchain Credential

## 1.2 Problem Statement

- **Fake resumes and fake experience** — Employers cannot trust self-reported skills.
- **No trusted way to verify remote candidates** — Manual screening is inconsistent.
- **Manual hiring is slow and expensive** — Time-to-hire and cost-per-hire are high.
- **Freelancers cannot prove real skills** — No portable, verifiable credential.
- **Employers lose money on bad hires** — Wrong hires damage teams and budgets.

## 1.3 Solution Summary

- **AI** conducts coding interviews and scores skills objectively.
- **Scores** are normalized (e.g. 0–100) with transparent criteria.
- **Verified skills** are minted as **SkillProof NFTs** (ERC-721) on Polygon/Base.
- **Employers** can discover verified candidates and **verify credentials on-chain** instantly.

## 1.4 Target Audience

| Persona | Description | Primary Need |
|---------|-------------|--------------|
| **Candidates** | Developers, freelancers | Prove skills with a shareable, blockchain-backed credential. |
| **Employers** | Startups, companies hiring remotely | Find and trust verified talent; reduce bad hires. |

## 1.5 Success Metrics & KPIs

| Phase | Timeframe | North Star / KPIs |
|-------|-----------|-------------------|
| **MVP Launch** | Month 0–2 | 200 verified candidates; 20 employers; 5–10 companies onboarded. |
| **Product-Market Fit** | Month 3–5 | $3k–$10k MRR; retention > 40%; multi-skill verification adoption. |
| **Trust Moat** | Month 6–9 | $25k+ MRR; 100+ companies; ATS integrations live. |
| **Scale & Fundraise** | Month 9–12 | Seed/Pre–Series A ($1M–$3M); enterprise and video AI in pipeline. |

**Supporting metrics:** Candidate conversion (signup → verified), employer conversion (signup → paid), interview completion rate, time to verification, LTV, churn, NPS.

---

# 2. Features & Requirements

## 2.1 MVP Features (In Scope — 30–45 Days)

### Candidate

- Email and wallet (Web3) login.
- Profile creation: skills, resume, GitHub (optional).
- AI coding interview (text-based).
- AI-generated skill score (e.g. React: 78/100).
- Blockchain SkillProof NFT issuance (score ≥ 70).
- Public verification profile with shareable link.

### Employer

- Employer dashboard.
- View verified candidate profiles.
- Filter by skill score and tech stack.
- Download / view AI interview report.
- Verify SkillProof NFT on blockchain.

### AI (MVP Scope)

- Resume parsing.
- Coding question generation.
- Code evaluation (correctness, quality, complexity).
- Skill scoring and normalization.
- Basic fraud detection (timing, copy-paste signals).

### Blockchain (MVP Scope)

- ERC-721 SkillProof NFT.
- Metadata: candidate wallet, skill name, score hash, timestamp, issuer.
- On-chain verification contract.
- Network: Polygon or Base (low gas).

## 2.2 Explicitly Out of Scope (MVP)

- DAO governance.
- Video interviews.
- Token economics / platform token.
- Multi-chain support.
- AI voice bots.

*These are future-phase considerations, not MVP.*

## 2.3 User Stories (Summary)

**Candidates**

- As a developer, I can sign up with email or wallet so that I can start verifying my skills.
- As a candidate, I can complete my profile (skills, resume, GitHub) so that employers see context.
- As a candidate, I can take an AI coding interview for a skill so that I get an objective score.
- As a candidate, I can mint a SkillProof NFT when I pass (≥70) so that I have a tamper-proof credential.
- As a candidate, I can share a public profile link so that employers can verify my skills.

**Employers**

- As an employer, I can search and filter verified candidates by skill and score so that I find relevant talent.
- As an employer, I can view a candidate’s verified skills and NFT so that I trust the credential.
- As an employer, I can verify a SkillProof NFT on-chain so that I confirm authenticity.
- As an employer, I can view/download the AI interview report so that I understand the evaluation.

## 2.4 Functional Requirements (High Level)

- **Auth:** Email/password and wallet-based auth; role-based access (Candidate / Employer); secure sessions.
- **Profiles:** Candidate and employer profile CRUD; resume upload and parsing; GitHub linking (optional).
- **Interviews:** Start session → generate question (AI) → run code in sandbox → submit → evaluate → score and report.
- **Scoring:** Normalized 0–100; weights (e.g. correctness, quality, complexity); fraud penalties.
- **NFT:** Mint only after passing threshold; metadata on-chain/IPFS; backend listens for mint events and updates DB.
- **Verification:** Public profile by ID; on-chain ownership and metadata check for “Verified on Blockchain.”
- **Employer:** Search/filter candidates (public profiles only); view profile, report, and NFT verification within plan limits.

---

# 3. User Flows & Design

## 3.1 Reference Documentation

User flows and behavior are specified in:

- **APP_FLOW_PART1.md** — Landing, onboarding, auth, candidate dashboard, AI interview (initiation, question generation, execution, submission, scoring).
- **APP_FLOW_PART2.md** — Blockchain/NFT (wallet, minting, on-chain verification, IPFS), public profile, employer dashboard (search, profile view, reports, saved searches, comparison), monetization, notifications.
- **APP_FLOW_PART3.md** — Error handling (API, blockchain, interview, auth), full user journeys (first-time/returning candidate and employer), state management, data flow, decision trees.
- **APP_FLOW_BREAKDOWN.md** — High-level structure of all flow areas.

Design and UX should align with these flows; wireframes and prototypes should reference the same journey and decision points.

## 3.2 Key User Journeys (Summary)

1. **First-time candidate:** Discovery → Signup (email/wallet) → Profile setup → Skill verification (AI interview) → Score & report → Mint NFT (if ≥70) → Share profile.
2. **Returning candidate:** Login → Dashboard → Verify another skill or update profile.
3. **First-time employer:** Discovery → Signup → Subscription selection → Dashboard → Search/filter → View candidate → Verify NFT & report → Save/contact.
4. **Returning employer:** Login → Saved searches / new matches → Review candidates → Compare → Verify on-chain → Contact.

## 3.3 Critical UX Principles

- Role-based routing (candidate vs employer) and clear CTAs (“Get Verified” vs “Find Talent”).
- Interview: clear instructions, code editor, run tests, submit confirmation, clear results and “Mint NFT” when eligible.
- Blockchain: wallet connection and network switch (Polygon/Base) with clear error handling and retry.
- Public profile: shareable URL, optional anonymous mode, clear “Verified on Blockchain” and report access for employers.

---

# 4. Scope & Constraints

## 4.1 In Scope (MVP)

- Monorepo: frontend (Next.js 14), backend (NestJS), AI microservice (Python/FastAPI).
- Auth (email + wallet), candidate and employer profiles, interview lifecycle, AI question + evaluation + scoring.
- SkillProof ERC-721 on Polygon or Base; minting post-pass; on-chain verification.
- Public verification profile; employer dashboard with search, filters, profile view, report access, NFT verification.
- Basic fraud checks; security (rate limiting, validation, secrets management).
- One network (Polygon or Base) for NFT; no multi-chain in MVP.

## 4.2 Out of Scope (MVP)

- DAO, token economics, multi-chain, video interviews, AI voice.
- Full ATS integrations (future phase).
- Advanced employer features: saved searches/alerts, comparison tool, custom verification requests (post-MVP per Features.txt).
- Practice mode, skill expiration/renewal, portfolio integration, multi-language interviews (post-MVP).
- Freemium/pay-per-verification and employer subscription tiers can be simplified or limited in MVP (e.g. single plan or invite-only).

*Detailed “not in MVP” list is in OverView.txt and Features.txt.*

## 4.3 Constraints

- **Technical:** PostgreSQL + Redis; Docker sandbox for code execution; LLM dependency for questions and evaluation.
- **Blockchain:** Gas costs on Polygon/Base; no gasless minting required for MVP (can be added later).
- **Compliance:** GDPR-aware data handling; no formal SOC2/EEOC in MVP but design with future compliance in mind.
- **Timeline:** MVP target 30–45 days from kickoff.

---

# 5. Timeline & Release Plan

## 5.1 MVP Milestones (30–45 Days)

| # | Milestone | Dependencies | Deliverables |
|---|-----------|--------------|--------------|
| 1 | Project setup & infra | — | Monorepo, env, CI/CD, deploy (e.g. Vercel + Railway/Render). |
| 2 | Auth & user management | Monorepo | Email + wallet auth; roles; candidate/employer profile APIs and basic UI. |
| 3 | Candidate dashboard | Auth, profiles | Dashboard UI, profile completion, resume/GitHub, verification status. |
| 4 | AI interview system | Backend, AI service | Question generation, sandbox execution, evaluation, scoring, report, fraud checks. |
| 5 | SkillProof NFT | Backend, contracts | ERC-721 contract (Polygon/Base), mint flow, event listener, DB update. |
| 6 | Public profile | Profiles, NFT | Shareable URL, public profile page, on-chain verification badge. |
| 7 | Employer dashboard | Auth, profiles, NFT | Employer UI, candidate list/detail, filters, report view, NFT verification. |
| 8 | Security & QA | All above | Rate limiting, validation, testing (frontend, API, contracts), launch prep. |

## 5.2 Epic Order (from breakdown.txt)

1. Project setup & infrastructure  
2. Authentication & user management  
3. Candidate dashboard  
4. AI interview system  
5. Blockchain — SkillProof NFT  
6. Public verification profile  
7. Employer dashboard  
8. Backend APIs & database  
9. Security & fraud prevention  
10. QA, testing & launch  

## 5.3 Post-MVP Phases (VC Roadmap)

- **Phase 2 (Month 3–5):** Multi-skill verification, GitHub auto-analysis, employer shortlisting AI, interview replay, team dashboards; employer subscriptions and paid verification; KPIs: MRR, retention.
- **Phase 3 (Month 6–9):** Advanced fraud AI, reputation graph, skill decay, on-chain work history, ATS APIs; KPIs: MRR, company count.
- **Phase 4 (Month 9–12):** Video AI interviews, multi-language, enterprise tools, DAO-based verification; fundraising target.

## 5.4 Launch Criteria (MVP)

- Candidates can sign up, complete profile, take one full AI interview, receive score/report, and mint SkillProof NFT when eligible.
- Employers can sign up, search/filter verified candidates, view profile and report, and verify NFT on-chain.
- Core errors (API, auth, blockchain, interview) handled per APP_FLOW_PART3.
- Critical path tested; landing and onboarding flows live.

---

# 6. System Context (Reference)

- **Frontend:** Next.js 14 (App Router), styled-components, Zustand/Redux, Ethers.js.
- **Backend:** Node.js, NestJS, PostgreSQL, Redis, Supabase Auth.
- **AI:** Python, FastAPI, LLM APIs, Docker sandbox for code execution.
- **Blockchain:** Solidity, Polygon or Base, ERC-721 SkillProof NFT; The Graph optional later.

*Full architecture and tech stack details are in OverView.txt.*

---

# 7. Appendix

## 7.1 Related Documents

- **OverView.txt** — Vision, problem, solution, MVP feature list, architecture, tech stack, roadmap, smart contract outline.  
- **Features.txt** — Product improvements, technical enhancements, business model, risks, priorities.  
- **breakdown.txt** — Task breakdown by epic and story (MVP).  
- **APP_FLOW_PART1.md, APP_FLOW_PART2.md, APP_FLOW_PART3.md** — End-to-end workflows and error handling.  
- **APP_FLOW_BREAKDOWN.md** — Structure of application flow documentation.

## 7.2 Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2025 | Product Manager | Initial PRD from App_Flow and product docs. |

---

**END OF PRD**

*This document is the single source of truth for SkillProof product scope, goals, features, and release plan. All feature and timeline decisions should be reflected here and communicated to engineering, design, and stakeholders.*
