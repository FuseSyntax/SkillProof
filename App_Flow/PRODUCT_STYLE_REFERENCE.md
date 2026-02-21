# SkillProof — Product & Style Reference

**Version:** 1.0  
**Owner:** Product / Design  
**Last Updated:** February 2025

---

## Purpose of This Document

This document is the **single reference for product language and style** in SkillProof: in-app copy, UI labels, buttons, messages, and terminology. Use it so that product, design, and engineering use consistent wording and tone across the product.

*For brand voice and taglines at large, see **BRANDING.md**. For audience and positioning, see **TARGET_AUDIENCE.md** and **PRODUCT_POSITIONING.md**.*

---

## 1. Scope

- **In scope:** In-app UI copy, buttons, labels, headings, error and success messages, empty states, tooltips, form labels, navigation, emails sent from the product.
- **Out of scope:** Marketing site copy, ads, and long-form content (use BRANDING.md and marketing guidelines).

---

## 2. Terminology (Product Language)

Use these terms consistently everywhere in the product.

| Term | Use in product | Don’t use |
|------|----------------|-----------|
| **SkillProof** | Brand name (capital P). | Skillproof (unless in URL/code). |
| **SkillProof NFT** | The on-chain credential. | “NFT” alone when we mean our credential; “credential” is OK as a synonym after first use. |
| **SkillProof badge** | The badge/credential shown on profile and in UI. | Inconsistent “certificate” / “badge” / “credential” mix. |
| **Verified skill** | A skill that has been assessed and (when applicable) minted. | “Certified skill,” “passed skill” (we say verified). |
| **Verification** | The process (take interview → get score → mint). | “Certification,” “assessment” alone (we use verification). |
| **Public profile** | The shareable candidate verification page. | “Profile page,” “share link” without “public profile” when we mean the shareable page. |
| **On-chain** | Verifiable on the blockchain. | “On blockchain” is OK; keep consistent. |
| **AI interview** | Our coding interview run by AI. | “Coding test,” “assessment” (we say AI interview). |
| **Candidate** | Person verifying their skills (our user type). | “Developer,” “user” when we mean candidate in product flows. |
| **Employer** | Company/person hiring (our user type). | “Recruiter,” “company” when we mean the employer role in product. |

**Spelling:** “SkillProof” (capital P) in all user-facing product copy. Use “skillproof” only in URLs, code, or domain.

---

## 3. Voice & Tone in Product

Product copy should feel:

| Attribute | In practice |
|-----------|-------------|
| **Clear** | Short sentences. One idea per message. Avoid jargon unless we explain it (e.g. first use of “SkillProof NFT,” “on-chain”). |
| **Confident** | State what’s possible; avoid “you might” or “hopefully.” |
| **Professional** | Appropriate for B2B and hiring; no slang or casual humor. |
| **Helpful** | Errors explain what went wrong and what to do next. Empty states suggest a clear next action. |
| **Trust-focused** | Use “verified,” “proof,” “on-chain” where it adds trust; don’t overuse. |

**Avoid in product:** Hype, “revolution,” fear-based wording, promising outcomes we don’t control (e.g. “you will get hired”).

---

## 4. UI Copy Guidelines

### 4.1 Buttons and CTAs

- Use **sentence case** for buttons (e.g. “Get verified”, “Find talent”, “View profile”).
- Lead with a **verb** where possible: “Start interview”, “Save candidate”, “Verify on blockchain”.
- Keep short: 1–3 words for primary actions; longer only when necessary for clarity.

**Standard actions:**

| Context | Preferred label |
|--------|------------------|
| Landing (candidate) | Get verified |
| Landing (employer) | Find talent |
| Start verification | Start interview |
| After interview (eligible) | Mint SkillProof NFT |
| Share profile | Share profile |
| Employer: check credential | Verify on blockchain |
| Employer: see full evaluation | View report |
| Save candidate | Save candidate |
| Search | Search or Search candidates |
| Save search | Save search |
| Compare | Compare (or “Compare (3)” with count) |
| Retry after error | Retry |
| Submit solution | Submit solution |
| Run code (interview) | Run code |

### 4.2 Headings and Titles

- Use **sentence case** for screens and sections (e.g. “Verified skills”, “Public profile”).
- Use **title case** only when it’s a proper name or product title (e.g. “SkillProof NFT”).
- Keep headings short and scannable.

### 4.3 Form Labels and Validation

- Labels: clear and concise (e.g. “Email”, “Skill to verify”, “Company name”).
- Required fields: indicate with “Required” or asterisk + legend; be consistent.
- Validation messages: state what’s wrong and how to fix it (e.g. “Enter a valid email address” not “Invalid input”).

### 4.4 Error and Status Messages

- **Tone:** Neutral, helpful. No blame (“You did X wrong”).
- **Structure:** What happened + what to do next (if applicable).
- **Length:** One short sentence for inline errors; up to two for modal or toast.

**Examples:**

| Situation | Good | Avoid |
|-----------|------|--------|
| Session expired | Session expired. Please sign in again. | Your session has been invalidated. |
| Network error | Something went wrong. Check your connection and try again. | Error 500. |
| Validation | Enter a valid email address. | Invalid. |
| Blockchain failed | Transaction failed. You can try again or contact support. | Transaction reverted. |
| Interview error | We couldn’t save your progress. You can retry or start again. | Error saving. |

### 4.5 Success Messages

- Short and positive. Confirm what was done.
- Examples: “Profile saved.” “SkillProof NFT minted.” “Candidate saved.” “Search saved.”

### 4.6 Empty States

- Explain why it’s empty in one line.
- Give one clear next action (button or link).
- Example: “No verified skills yet. Verify your first skill to get a SkillProof credential.”

### 4.7 Loading and Progress

- Use “Loading…” or “[Noun]…” (e.g. “Loading profile…”, “Minting…”).
- For multi-step flows, use step labels (e.g. “Preparing…”, “Confirm in wallet…”, “Minting…”).

---

## 5. Formatting Conventions

| Element | Rule | Example |
|---------|------|---------|
| **Numbers** | Use numerals for scores, counts, and UI (e.g. “78/100”, “3 skills”). Spell out only when it reads better (“You have one verification left.”). | 78/100, 3 skills |
| **Dates** | Prefer short, unambiguous format; respect locale. | Jan 15, 2025 or 15 Jan 2025 |
| **Time** | Use same format across product (e.g. “35 min” for duration). | 35 min |
| **Punctuation** | No period at end of button or single-line label. Period at end of full sentences in body and messages. | Buttons: “Get verified” / Body: “Your profile is public.” |
| **Capitalization** | Sentence case for UI; title case only for proper names and product terms. | “Verified skills” / “SkillProof NFT” |
| **Abbreviations** | Use “NFT” and “AI” without spelling out after first use in a flow. “e.g.” and “i.e.” OK in help text; avoid in buttons. | NFT, AI |

---

## 6. Role-Specific Language

### Candidate-facing

- “Your verified skills”, “Your profile”, “Verify a skill”, “Your SkillProof NFT”.
- CTAs: “Get verified”, “Start interview”, “Mint SkillProof NFT”, “Share profile”.
- Avoid employer-only terms (“candidates”, “talent pool”) in candidate UI.

### Employer-facing

- “Verified candidates”, “Candidate profile”, “Verify on blockchain”, “View report”, “Save candidate”.
- CTAs: “Find talent”, “Search candidates”, “Verify on blockchain”, “View report”.
- Avoid candidate-only terms (“Get verified”) in employer UI unless in comparison or explanation.

### Shared (landing, auth, footer)

- “Candidates” and “Employers” as roles; “Get verified” (candidate) and “Find talent” (employer) as the two paths.

---

## 7. Technical Terms in Product

| Term | First use in a flow | Later use |
|------|---------------------|-----------|
| **SkillProof NFT** | “SkillProof NFT (a credential stored on the blockchain)” or similar one-time explainer. | “SkillProof NFT” or “credential”. |
| **On-chain** | Optional brief: “Verifiable on the blockchain.” | “On-chain” or “Verify on blockchain”. |
| **Wallet** | When asking to connect: “Connect your wallet to mint your SkillProof NFT.” | “Wallet”. |
| **AI interview** | No need to spell out; “AI interview” is clear. | “AI interview”. |

Keep explanations to one short phrase; link to help or FAQ for more.

---

## 8. Examples and Anti-Patterns

**Do**

- “Your React skill is verified. Mint your SkillProof NFT to get a shareable credential.”
- “Verify on blockchain” (button).
- “Session expired. Please sign in again.”
- “No verified skills yet. Verify your first skill to get started.”

**Don’t**

- “Your React skill has been successfully verified and you are now eligible to mint an NFT!” (too long; avoid exclamation.)
- “Verify on Blockchain” (sentence case for buttons: “Verify on blockchain”.)
- “Error.” (no guidance.)
- “You have no skills.” (empty state with no next step or tone.)

---

## 9. Technical Context (for Implementation)

- **Frontend:** Next.js 14 (App Router), styled-components, Zustand.
- **Copy:** Keep user-facing strings consistent with this doc; consider a shared copy file or i18n keys for reuse.
- **Accessibility:** Labels and messages should work with screen readers; avoid “click here” and be explicit (“Verify on blockchain”, “View full report”).

---

## 10. Related Documents

| Document | Use |
|----------|-----|
| **BRANDING.md** | Brand name, taglines, voice at large, naming conventions. |
| **PRD.md** | Feature names and product scope. |
| **TARGET_AUDIENCE.md** | Candidate vs employer language and needs. |
| **PRODUCT_POSITIONING.md** | How we describe the product to the market. |
| **APP_FLOW_PART1.md, PART2.md, PART3.md** | Flows and example button/label text. |

---

**END OF PRODUCT & STYLE REFERENCE**

*Use this document when writing or reviewing in-product copy. Update when we add new features or change terminology.*
