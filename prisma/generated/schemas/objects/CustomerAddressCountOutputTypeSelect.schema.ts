import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Report: z.boolean().optional()
}).strict();
export const CustomerAddressCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomerAddressCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCountOutputTypeSelect>;
export const CustomerAddressCountOutputTypeSelectObjectZodSchema = makeSchema();
