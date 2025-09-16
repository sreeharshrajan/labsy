import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantId: z.string(),
  name: z.string()
}).strict();
export const TenantRoleTenantIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TenantRoleTenantIdNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleTenantIdNameCompoundUniqueInput>;
export const TenantRoleTenantIdNameCompoundUniqueInputObjectZodSchema = makeSchema();
