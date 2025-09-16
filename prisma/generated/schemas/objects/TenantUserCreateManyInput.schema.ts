import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string()
}).strict();
export const TenantUserCreateManyInputObjectSchema: z.ZodType<Prisma.TenantUserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateManyInput>;
export const TenantUserCreateManyInputObjectZodSchema = makeSchema();
