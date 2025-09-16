import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenants: z.boolean().optional(),
  sessions: z.boolean().optional(),
  accounts: z.boolean().optional(),
  auditLogs: z.boolean().optional(),
  userAddresses: z.boolean().optional(),
  ReportChangeLog: z.boolean().optional(),
  Notification: z.boolean().optional(),
  posts: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
