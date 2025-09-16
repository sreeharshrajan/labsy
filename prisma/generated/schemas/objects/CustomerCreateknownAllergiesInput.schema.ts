import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const CustomerCreateknownAllergiesInputObjectSchema: z.ZodType<Prisma.CustomerCreateknownAllergiesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateknownAllergiesInput>;
export const CustomerCreateknownAllergiesInputObjectZodSchema = makeSchema();
