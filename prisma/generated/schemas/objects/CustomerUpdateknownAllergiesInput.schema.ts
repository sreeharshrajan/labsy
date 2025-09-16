import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const CustomerUpdateknownAllergiesInputObjectSchema: z.ZodType<Prisma.CustomerUpdateknownAllergiesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateknownAllergiesInput>;
export const CustomerUpdateknownAllergiesInputObjectZodSchema = makeSchema();
