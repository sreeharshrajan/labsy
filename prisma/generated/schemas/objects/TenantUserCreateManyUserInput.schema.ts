import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string()
}).strict();
export const TenantUserCreateManyUserInputObjectSchema: z.ZodType<Prisma.TenantUserCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateManyUserInput>;
export const TenantUserCreateManyUserInputObjectZodSchema = makeSchema();
