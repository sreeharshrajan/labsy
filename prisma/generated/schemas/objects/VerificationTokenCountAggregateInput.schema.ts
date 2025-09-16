import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  identifier: z.literal(true).optional(),
  expires: z.literal(true).optional(),
  token: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VerificationTokenCountAggregateInputObjectSchema: z.ZodType<Prisma.VerificationTokenCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenCountAggregateInputType>;
export const VerificationTokenCountAggregateInputObjectZodSchema = makeSchema();
