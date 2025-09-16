import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  key: z.literal(true).optional(),
  value: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const AppSettingMaxAggregateInputObjectSchema: z.ZodType<Prisma.AppSettingMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingMaxAggregateInputType>;
export const AppSettingMaxAggregateInputObjectZodSchema = makeSchema();
