import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  appName: z.boolean().optional(),
  appVersion: z.boolean().optional(),
  appLogo: z.boolean().optional(),
  appIcon: z.boolean().optional(),
  appBanner: z.boolean().optional(),
  appDescription: z.boolean().optional(),
  appKeywords: z.boolean().optional(),
  appAuthor: z.boolean().optional(),
  appAuthorEmail: z.boolean().optional(),
  appAuthorUrl: z.boolean().optional(),
  appCopyright: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const AppConfigSelectObjectSchema: z.ZodType<Prisma.AppConfigSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppConfigSelect>;
export const AppConfigSelectObjectZodSchema = makeSchema();
