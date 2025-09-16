import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Report: z.boolean().optional()
}).strict();
export const TenantAddressCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantAddressCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCountOutputTypeSelect>;
export const TenantAddressCountOutputTypeSelectObjectZodSchema = makeSchema();
