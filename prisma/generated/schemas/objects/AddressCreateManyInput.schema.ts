import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  line1: z.string(),
  line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AddressCreateManyInputObjectSchema: z.ZodType<Prisma.AddressCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateManyInput>;
export const AddressCreateManyInputObjectZodSchema = makeSchema();
