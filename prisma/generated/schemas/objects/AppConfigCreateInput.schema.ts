import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  appName: z.string(),
  appVersion: z.string(),
  appLogo: z.string().optional().nullable(),
  appIcon: z.string().optional().nullable(),
  appBanner: z.string().optional().nullable(),
  appDescription: z.string().optional().nullable(),
  appKeywords: z.string().optional().nullable(),
  appAuthor: z.string().optional().nullable(),
  appAuthorEmail: z.string().optional().nullable(),
  appAuthorUrl: z.string().optional().nullable(),
  appCopyright: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AppConfigCreateInputObjectSchema: z.ZodType<Prisma.AppConfigCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppConfigCreateInput>;
export const AppConfigCreateInputObjectZodSchema = makeSchema();
