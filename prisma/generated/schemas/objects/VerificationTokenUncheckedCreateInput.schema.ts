import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  identifier: z.string(),
  expires: z.coerce.date(),
  token: z.string()
}).strict();
export const VerificationTokenUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenUncheckedCreateInput>;
export const VerificationTokenUncheckedCreateInputObjectZodSchema = makeSchema();
