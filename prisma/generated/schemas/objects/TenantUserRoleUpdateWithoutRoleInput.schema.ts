import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUserUpdateOneRequiredWithoutTenantRolesNestedInputObjectSchema } from './TenantUserUpdateOneRequiredWithoutTenantRolesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantUser: z.lazy(() => TenantUserUpdateOneRequiredWithoutTenantRolesNestedInputObjectSchema).optional()
}).strict();
export const TenantUserRoleUpdateWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateWithoutRoleInput>;
export const TenantUserRoleUpdateWithoutRoleInputObjectZodSchema = makeSchema();
