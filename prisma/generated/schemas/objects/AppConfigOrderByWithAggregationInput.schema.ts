import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppConfigCountOrderByAggregateInputObjectSchema } from './AppConfigCountOrderByAggregateInput.schema';
import { AppConfigMaxOrderByAggregateInputObjectSchema } from './AppConfigMaxOrderByAggregateInput.schema';
import { AppConfigMinOrderByAggregateInputObjectSchema } from './AppConfigMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appName: SortOrderSchema.optional(),
  appVersion: SortOrderSchema.optional(),
  appLogo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appIcon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appBanner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appKeywords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appAuthor: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appAuthorEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appAuthorUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  appCopyright: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AppConfigCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AppConfigMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AppConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AppConfigOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AppConfigOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppConfigOrderByWithAggregationInput>;
export const AppConfigOrderByWithAggregationInputObjectZodSchema = makeSchema();
