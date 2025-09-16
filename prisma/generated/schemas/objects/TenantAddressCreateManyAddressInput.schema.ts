import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TenantAddressCreateManyAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateManyAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateManyAddressInput>;
export const TenantAddressCreateManyAddressInputObjectZodSchema = makeSchema();
