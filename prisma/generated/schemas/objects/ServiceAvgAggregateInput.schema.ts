import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  price: z.literal(true).optional()
}).strict();
export const ServiceAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServiceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServiceAvgAggregateInputType>;
export const ServiceAvgAggregateInputObjectZodSchema = makeSchema();
