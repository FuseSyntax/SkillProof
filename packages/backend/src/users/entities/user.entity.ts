import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  CANDIDATE = 'candidate',
  EMPLOYER = 'employer',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CANDIDATE,
  })
  role: UserRole;

  @Column({ nullable: true, unique: true })
  walletAddress: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

