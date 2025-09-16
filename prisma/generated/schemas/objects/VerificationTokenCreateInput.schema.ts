import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  identifier: z.string(),
  expires: z.coerce.date(),
  token: z.string()
}).strict();
export const VerificationTokenCreateInputObjectSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenCreateInput>;
export const VerificationTokenCreateInputObjectZodSchema = makeSchema();
