// Common types shared across the application

export type UserRole = 'candidate' | 'employer';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  walletAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CandidateProfile {
  id: string;
  userId: string;
  name: string;
  bio?: string;
  location?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  githubUsername?: string;
  resumeUrl?: string;
  profileCompletion: number;
  createdAt: string;
  updatedAt: string;
}

export interface SkillVerification {
  id: string;
  candidateId: string;
  skill: string;
  score: number;
  nftTokenId?: string;
  nftTransactionHash?: string;
  reportUrl?: string;
  verifiedAt: string;
  createdAt: string;
}

export interface InterviewSession {
  id: string;
  candidateId: string;
  skill: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  question?: string;
  code?: string;
  score?: number;
  startedAt: string;
  completedAt?: string;
}

