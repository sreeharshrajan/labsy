import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUserUpdateOneRequiredWithoutTenantRolesNestedInputObjectSchema } from './TenantUserUpdateOneRequiredWithoutTenantRolesNestedInput.schema';
import { TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInputObjectSchema } from './TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantUser: z.lazy(() => TenantUserUpdateOneRequiredWithoutTenantRolesNestedInputObjectSchema).optional(),
  role: z.lazy(() => TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInputObjectSchema).optional()
}).strict();
export const TenantUserRoleUpdateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateInput>;
export const TenantUserRoleUpdateInputObjectZodSchema = makeSchema();
