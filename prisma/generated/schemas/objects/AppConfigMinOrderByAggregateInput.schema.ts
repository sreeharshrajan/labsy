import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appName: SortOrderSchema.optional(),
  appVersion: SortOrderSchema.optional(),
  appLogo: SortOrderSchema.optional(),
  appIcon: SortOrderSchema.optional(),
  appBanner: SortOrderSchema.optional(),
  appDescription: SortOrderSchema.optional(),
  appKeywords: SortOrderSchema.optional(),
  appAuthor: SortOrderSchema.optional(),
  appAuthorEmail: SortOrderSchema.optional(),
  appAuthorUrl: SortOrderSchema.optional(),
  appCopyright: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AppConfigMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppConfigMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppConfigMinOrderByAggregateInput>;
export const AppConfigMinOrderByAggregateInputObjectZodSchema = makeSchema();
