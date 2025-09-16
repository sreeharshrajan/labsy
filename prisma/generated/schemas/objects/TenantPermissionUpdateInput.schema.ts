import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TenantRoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './TenantRoleUpdateOneRequiredWithoutPermissionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.lazy(() => TenantRoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional()
}).strict();
export const TenantPermissionUpdateInputObjectSchema: z.ZodType<Prisma.TenantPermissionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUpdateInput>;
export const TenantPermissionUpdateInputObjectZodSchema = makeSchema();
