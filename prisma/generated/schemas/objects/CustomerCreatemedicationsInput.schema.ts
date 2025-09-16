import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const CustomerCreatemedicationsInputObjectSchema: z.ZodType<Prisma.CustomerCreatemedicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreatemedicationsInput>;
export const CustomerCreatemedicationsInputObjectZodSchema = makeSchema();
