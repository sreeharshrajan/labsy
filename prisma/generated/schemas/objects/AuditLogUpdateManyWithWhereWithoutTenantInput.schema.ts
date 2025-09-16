import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogScalarWhereInputObjectSchema } from './AuditLogScalarWhereInput.schema';
import { AuditLogUpdateManyMutationInputObjectSchema } from './AuditLogUpdateManyMutationInput.schema';
import { AuditLogUncheckedUpdateManyWithoutTenantInputObjectSchema } from './AuditLogUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AuditLogUpdateManyMutationInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const AuditLogUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.AuditLogUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpdateManyWithWhereWithoutTenantInput>;
export const AuditLogUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
