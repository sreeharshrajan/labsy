import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  expires: z.coerce.date(),
  sessionToken: z.string()
}).strict();
export const SessionCreateManyInputObjectSchema: z.ZodType<Prisma.SessionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyInput>;
export const SessionCreateManyInputObjectZodSchema = makeSchema();
