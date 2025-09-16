import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  expires: z.coerce.date(),
  sessionToken: z.string()
}).strict();
export const SessionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutUserInput>;
export const SessionCreateWithoutUserInputObjectZodSchema = makeSchema();
