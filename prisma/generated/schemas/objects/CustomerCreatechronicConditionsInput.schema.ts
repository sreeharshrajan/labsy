import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const CustomerCreatechronicConditionsInputObjectSchema: z.ZodType<Prisma.CustomerCreatechronicConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreatechronicConditionsInput>;
export const CustomerCreatechronicConditionsInputObjectZodSchema = makeSchema();
