import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  tenantId: z.string()
}).strict();
export const TenantUserUserIdTenantIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TenantUserUserIdTenantIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUserIdTenantIdCompoundUniqueInput>;
export const TenantUserUserIdTenantIdCompoundUniqueInputObjectZodSchema = makeSchema();
