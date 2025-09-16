import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  appName: z.literal(true).optional(),
  appVersion: z.literal(true).optional(),
  appLogo: z.literal(true).optional(),
  appIcon: z.literal(true).optional(),
  appBanner: z.literal(true).optional(),
  appDescription: z.literal(true).optional(),
  appKeywords: z.literal(true).optional(),
  appAuthor: z.literal(true).optional(),
  appAuthorEmail: z.literal(true).optional(),
  appAuthorUrl: z.literal(true).optional(),
  appCopyright: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AppConfigMaxAggregateInputObjectSchema: z.ZodType<Prisma.AppConfigMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppConfigMaxAggregateInputType>;
export const AppConfigMaxAggregateInputObjectZodSchema = makeSchema();
