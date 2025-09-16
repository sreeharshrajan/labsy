import { z } from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.string(),
  userTitle: z.unknown(),
  name: z.string().optional(),
  email: z.string(),
  image: z.string().optional(),
  passwordHash: z.string().optional(),
  phone: z.string().optional(),
  isSuperAdmin: z.boolean(),
  status: z.unknown(),
  dateOfBirth: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenants: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  auditLogs: z.array(z.unknown()),
  userAddresses: z.array(z.unknown()),
  ReportChangeLog: z.array(z.unknown()),
  Notification: z.array(z.unknown()),
  posts: z.array(z.unknown())
});