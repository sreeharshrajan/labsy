import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  roleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TenantPermissionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TenantPermissionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionUncheckedUpdateInput>;
export const TenantPermissionUncheckedUpdateInputObjectZodSchema = makeSchema();
