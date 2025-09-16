import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TenantAddressCreateManyInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateManyInput>;
export const TenantAddressCreateManyInputObjectZodSchema = makeSchema();
